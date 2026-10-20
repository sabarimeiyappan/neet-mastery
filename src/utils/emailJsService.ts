import emailjs from '@emailjs/browser';

export const EMAILJS_SERVICE_ID = "service_tlu3g38";
export const EMAILJS_TEMPLATE_ID = "4tpvoe5";
export const EMAILJS_PUBLIC_KEY = "sjQGLCOxF4VLOgDEb";

export interface EmailDispatchResult {
  success: boolean;
  message: string;
  isNetworkError?: boolean;
  passcode?: string;
  templateUsed?: string;
}

/**
 * Dispatches a real-time OTP verification passcode to a student's email using EmailJS.
 * Strictly calls emailjs.send with the 4 required arguments:
 * emailjs.send(
 *   "service_tlu3g38",
 *   "4tpvoe5",
 *   {
 *     email: studentEmail,
 *     passcode: generatedOtp,
 *     time: "15 minutes"
 *   },
 *   "sjQGLCOxF4VLOgDEb"
 * );
 */
export async function sendOtpViaEmailJs(
  studentEmail: string,
  passcode: string
): Promise<EmailDispatchResult> {
  const cleanEmail = studentEmail.trim();
  const cleanPasscode = passcode.trim();

  const templateParams = {
    email: cleanEmail,
    passcode: cleanPasscode,
    time: "15 minutes",
  };

  try {
    console.log(`[EmailJS OTP] Sending to ${cleanEmail} with template "4tpvoe5"...`);

    // Strict 4-argument call
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('[EmailJS OTP SUCCESS]', result.status, result.text);
    return {
      success: true,
      message: `Verification code successfully dispatched to ${cleanEmail}.`,
      templateUsed: EMAILJS_TEMPLATE_ID,
    };
  } catch (sdkError: any) {
    console.warn('[EmailJS SDK Notice] Fallback to direct REST API:', sdkError?.text || sdkError?.message || sdkError);

    // REST API fallback using exact same 4 parameters
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: templateParams,
        }),
      });

      if (response.ok) {
        console.log('[EmailJS REST SUCCESS] Dispatched OTP to', cleanEmail);
        return {
          success: true,
          message: `Verification code successfully dispatched to ${cleanEmail}.`,
          templateUsed: EMAILJS_TEMPLATE_ID,
        };
      }

      const errText = await response.text();
      console.warn(`[EmailJS REST Status ${response.status}]: ${errText}`);
    } catch (restErr: any) {
      console.warn('[EmailJS REST Network Notice]:', restErr);
    }

    // Graceful fallback: Never lock student out
    return {
      success: false,
      isNetworkError: true,
      passcode: cleanPasscode,
      message: `Email delivery experienced a network delay. Instant access passcode enabled.`,
    };
  }
}

export interface ScorecardReportPayload {
  candidateEmail: string;
  score: number;
  accuracy: number;
  timeStr?: string;
}

/**
 * Dispatches exam scorecard to candidate email using EmailJS.
 * Strictly triggers emailjs.send with service "service_tlu3g38", template "4tpvoe5", and payload:
 * {
 *   email: candidateEmail,
 *   passcode: `Score: ${score}/60 (Accuracy: ${accuracy}%)`,
 *   time: new Date().toLocaleTimeString()
 * }
 */
export async function sendScorecardViaEmailJs(
  payload: ScorecardReportPayload
): Promise<EmailDispatchResult> {
  const cleanEmail = payload.candidateEmail.trim();
  const timeString = payload.timeStr || new Date().toLocaleTimeString();
  const passcodePayload = `Score: ${payload.score}/60 (Accuracy: ${payload.accuracy}%)`;

  const templateParams = {
    email: cleanEmail,
    passcode: passcodePayload,
    time: timeString,
  };

  try {
    console.log(`[EmailJS Scorecard] Sending to ${cleanEmail}...`);

    // Strict 4-argument call
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('[EmailJS Scorecard SUCCESS]', result.status, result.text);
    return {
      success: true,
      message: `Official NEET Scorecard successfully dispatched to ${cleanEmail}! Check inbox or spam folder.`,
      templateUsed: EMAILJS_TEMPLATE_ID,
    };
  } catch (sdkError: any) {
    console.warn('[EmailJS Scorecard SDK Notice] Trying REST fallback:', sdkError?.text || sdkError?.message || sdkError);

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: templateParams,
        }),
      });

      if (response.ok) {
        return {
          success: true,
          message: `Official NEET Scorecard successfully dispatched to ${cleanEmail}! Check inbox or spam folder.`,
          templateUsed: EMAILJS_TEMPLATE_ID,
        };
      }
    } catch (e: any) {
      console.warn('[EmailJS Scorecard REST Notice]:', e);
    }

    return {
      success: false,
      isNetworkError: true,
      message: `Scorecard summarized locally. Download or print PDF below.`,
    };
  }
}
