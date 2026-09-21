"use server";

export type EnquiryState = {
  ok: boolean;
  message: string;
};

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData
): Promise<EnquiryState> {
  const honeypot = String(formData.get("company") || "").trim();
  if (honeypot) {
    return { ok: true, message: "Thanks — we will get back to you shortly." };
  }

  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const course = String(formData.get("course") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (name.length < 2) {
    return { ok: false, message: "Please enter your full name." };
  }

  if (!/^[0-9+\-\s]{8,15}$/.test(phone)) {
    return { ok: false, message: "Please enter a valid phone number." };
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  console.info("[enquiry]", { name, phone, email, course, message });

  return {
    ok: true,
    message:
      "Enquiry received. Visit us at Beside SCO. 154, Mugal Canal Road, Karnal, or wait for a callback with batch timings.",
  };
}
