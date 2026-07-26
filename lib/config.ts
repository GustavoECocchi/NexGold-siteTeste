/**
 * Site-wide config. Contact info is not yet defined by the client — swap
 * these two values when real details exist, nothing else needs to change.
 */
export const CONTACT_EMAIL_DEFINED = false;
export const CONTACT_EMAIL = "contato@nexgold.com.br"; // [a definir]

export const CONTACT_WHATSAPP_DEFINED = false;
export const CONTACT_WHATSAPP_NUMBER = "5500000000000"; // [a definir] formato internacional, apenas dígitos
export const CONTACT_WHATSAPP_DISPLAY = "[WhatsApp a definir]";

export const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Vamos construir algo juntos"
)}`;

export const whatsappHref = `https://wa.me/${CONTACT_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Vim pelo site da NexGold e quero conversar sobre um projeto."
)}`;
