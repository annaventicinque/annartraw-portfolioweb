const ENDPOINT = "https://formsubmit.co/ajax/annavtcq.contact@gmail.com";

export async function sendForm(
  subject: string,
  data: Record<string, string>,
): Promise<void> {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: subject,
      _template: "table",
      _captcha: "false",
      ...data,
    }),
  });
  if (!res.ok) {
    throw new Error("Echec de l'envoi");
  }
  const json = (await res.json()) as { success?: string | boolean };
  if (!(json.success === true || json.success === "true")) {
    throw new Error("Echec de l'envoi");
  }
}