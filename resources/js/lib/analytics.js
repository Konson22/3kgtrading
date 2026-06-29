/**
 * Push conversion events to GTM dataLayer (and gtag fallback).
 */
export function trackEvent(event, params = {}) {
    if (typeof window === 'undefined') {
        return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });

    if (typeof window.gtag === 'function') {
        window.gtag('event', event, params);
    }
}

export function trackFormSubmit(formName = 'request_service') {
    trackEvent('form_submit', { form_name: formName });
    trackEvent('generate_lead', { form_name: formName });
}

export function trackPhoneClick(label = 'phone') {
    trackEvent('contact_click', { contact_type: 'phone', label });
}

export function trackEmailClick(label = 'email') {
    trackEvent('email_click', { contact_type: 'email', label });
}

export function trackWhatsAppClick() {
    trackEvent('whatsapp_click', { contact_type: 'whatsapp' });
}

export function trackCtaClick(label) {
    trackEvent('cta_click', { cta_label: label });
}
