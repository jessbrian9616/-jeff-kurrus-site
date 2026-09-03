/*
Design philosophy for this file: the contact page should feel direct, calm, and trustworthy.
Reduce friction, keep the form legible, and let the practical contact options sit within a clean editorial frame.
*/
import { useState, useEffect } from "react";
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import { usePageMeta } from "@/hooks/usePageMeta";
import { photographyPackages, siteMeta, visualAssets } from "@/lib/siteContent";

// Allowed inquiry types — must match the <option value="..."> values in the form.
const ALLOWED_INQUIRY_TYPES = [
  "School Visit",
  "Order Books",
  "Senior Photo Session",
  "Media Inquiry",
  "General Inquiry",
] as const;

// Funding-stage option that triggers Jeff's "send the funding document" action line.
// Kept as a constant so the form field's value and the conditional ACTION trigger
// always reference the same exact string. Mirrors the SchoolVisits page constant.
const FUNDING_STATUS_TRIGGER = "Interested in funding options — please send any funding information available";

// The one signing choice that requires an inscription. Kept as a constant so the
// option value and the conditional that reveals the inscription field can never
// drift apart. (2026-09-01)
const SIGNING_PERSONALIZED = "Signed and personalized to a name";

// Senior photo session packages, sourced from siteContent so titles stay in sync
// if a package is renamed. Used both to pre-fill from the URL param `package` (set
// by the three Book This Package buttons on /photography) and to render the
// conditional package dropdown on this form.
const ALLOWED_PACKAGES = photographyPackages.map((p) => p.title);

export default function Contact() {
  usePageMeta("Contact Jeff Kurrus", "Book a school visit, order books, schedule a senior photo session, or send a general inquiry. Jeff reads every message. Based in Gretna, Nebraska.");
  // Track inquiry type AND (when relevant) the senior photo session package so the
  // email subject Jeff receives reflects the visitor's actual intent.
  const [inquiryType, setInquiryType] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  // Funding-stage state used by the conditional School Visit block. Reset to empty
  // whenever the inquiry type changes away from School Visit so a stale funding answer
  // from a prior selection cannot bleed into a different inquiry context.
  const [fundingStatus, setFundingStatus] = useState("");
  // Signing choice for Order Books. Cleared when the inquiry type moves away, so a
  // stale signing answer cannot ride along on a school-visit or photo enquiry. (2026-09-01)
  const [signingRequest, setSigningRequest] = useState("");
  // Copies wanted, for Order Books. Drives how many inscription lines appear.
  // Held as a string because a number input can legitimately be empty mid-typing.
  const [quantity, setQuantity] = useState("1");
  const emailSubject = (() => {
    if (!inquiryType) return "New inquiry from jeffkurrus.com";
    if (inquiryType === "Senior Photo Session" && selectedPackage) {
      return `Senior Photo Session: ${selectedPackage} - jeffkurrus.com`;
    }
    return `${inquiryType} - jeffkurrus.com`;
  })();

  // Pre-fill from URL query params so buttons across the site
  // (Photography "Book This Package", SchoolVisits "Order Books", News "Get in Touch")
  // can land here with the dropdowns already set. The `package` param is only
  // honored when it matches a real package title; type/package only set state if
  // they pass the allowlist (prevents injection of arbitrary subject text).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedType = params.get("type");
    if (requestedType && ALLOWED_INQUIRY_TYPES.includes(requestedType as typeof ALLOWED_INQUIRY_TYPES[number])) {
      setInquiryType(requestedType);
    }
    const requestedPackage = params.get("package");
    if (requestedPackage && ALLOWED_PACKAGES.includes(requestedPackage)) {
      setSelectedPackage(requestedPackage);
    }
  }, []);
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Contact"
        title="I read every message."
        description="Use the form below to book a school visit, order books, ask about photography, or send a general inquiry."
        image={visualAssets.jkPhotography.heroFoggyFisherman}
        imagePosition="80% center"
        gradientStrength="minimal"
        size="compact"
      />

      {/* id="form" anchor lets buttons across the site (News page Get in Touch, SchoolVisits Order Books, etc.)
          scroll directly to the form with the inquiry-type drop-down visible. */}
      <section id="form" className="container py-16 sm:py-20 scroll-mt-24">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="soft-card p-8 sm:p-10 lg:p-12">
            <p className="section-label">Contact form</p>
            <form action="https://formspree.io/f/mlgavlpv" method="POST" className="space-y-4">
              {/* 2026-09-01: split into first and last name, both required. Baymard's
                  research prefers a single full-name field for checkout forms, because
                  42% of their participants typed a full name into a First Name box. That
                  finding is about data quality in a database. The problem here is
                  different: a single "Name" field lets someone submit "Emma", and Jeff
                  cannot address a parcel to a first name. Split fields guarantee a
                  surname, and Baymard's failure mode (a full name in the first box) still
                  leaves Jeff a usable name, because a person reads this, not a database. */}
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" name="first_name" placeholder="First name *" required aria-required="true" autoComplete="given-name" aria-label="First name. Required." className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]" />
                <input type="text" name="last_name" placeholder="Last name *" required aria-required="true" autoComplete="family-name" aria-label="Last name. Required." className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]" />
              </div>
              <input type="email" name="email" placeholder="Email *" required aria-required="true" autoComplete="email" aria-label="Email. Required." className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]" />
              {/* Phone stays required at Jess's instruction. Baymard's study of 1,026
                  online shoppers found 14% would never give a store their phone number,
                  and that unexplained required phone fields produce fake entries. Their
                  three sanctioned remedies are: explain why it is required, make it
                  optional, or drop it. The explanation below is remedy one. If order
                  volume ever looks lower than expected, this field is the first thing
                  to test making optional. */}
              <input type="tel" name="phone" placeholder="Phone *" required aria-required="true" autoComplete="tel" aria-label="Phone. Required." className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]" />
              <p className="-mt-1 px-1 text-sm text-[#5D6475]">Only used if Jeff needs to reach you about your request.</p>
              <select
                name="inquiry_type"
                required
                value={inquiryType}
                onChange={(e) => {
                  const next = e.target.value;
                  setInquiryType(next);
                  // If the visitor switches away from Senior Photo Session, clear
                  // any package selection so it doesn't bleed into a different
                  // inquiry's subject line.
                  if (next !== "Senior Photo Session") setSelectedPackage("");
                  // Same logic for funding stage — clear when the inquiry is no
                  // longer a School Visit so a stale answer can't slip into the
                  // submitted email.
                  if (next !== "School Visit") setFundingStatus("");
                  // Same logic for the signing choice — clear it when the inquiry is
                  // no longer a book order.
                  if (next !== "Order Books") { setSigningRequest(""); setQuantity("1"); }
                }}
                className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]"
              >
                <option value="" disabled>What can Jeff help with? *</option>
                <option value="School Visit">School Visit</option>
                <option value="Order Books">Order Books</option>
                <option value="Senior Photo Session">Senior Photo Session</option>
                <option value="Media Inquiry">Media Inquiry</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
              {/* Conditional package dropdown — appears only when inquiry type is
                  Senior Photo Session. Pre-fills from the `package` URL param when
                  the visitor came from one of the three Book This Package buttons. */}
              {inquiryType === "Senior Photo Session" && (
                <select
                  name="senior_package"
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]"
                >
                  <option value="">Which package? (optional)</option>
                  {ALLOWED_PACKAGES.map((pkg) => (
                    <option key={pkg} value={pkg}>{pkg}</option>
                  ))}
                  <option value="Not sure yet — let's discuss">Not sure yet — let's discuss</option>
                </select>
              )}
              {/* Conditional funding-stage dropdown — only shown when the inquiry type
                  is School Visit. Mirrors the SchoolVisits page form so the same three
                  options and the same ACTION trigger phrase apply regardless of which
                  door the school comes through. */}
              {inquiryType === "School Visit" && (
                <>
                  <select
                    name="funding_status"
                    required
                    value={fundingStatus}
                    onChange={(e) => setFundingStatus(e.target.value)}
                    className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]"
                  >
                    <option value="" disabled>Funding for this visit *</option>
                    <option value="Funding is in place — ready to discuss dates and details">Funding is in place — ready to discuss dates and details</option>
                    <option value={FUNDING_STATUS_TRIGGER}>Interested in funding options — please send any funding information available</option>
                    <option value="Just exploring — gathering information first">Just exploring — gathering information first</option>
                  </select>
                  {fundingStatus === FUNDING_STATUS_TRIGGER && (
                    <input type="hidden" name="action_required" value="ACTION: Send the Nebraska Author Visit Funding Document." />
                  )}
                </>
              )}
              {/* Conditional signing block — only shown when the inquiry type is Order
                  Books. Added 2026-09-01 alongside the Signed and Personalized section on
                  the Books page. Signing and personalization are OFFERED here, never
                  promised: the visitor chooses, and "Neither" is a real option. The
                  inscription field only appears once they have asked for personalization,
                  so nobody is made to answer a question that does not apply to them.
                  This capture is payment-method agnostic. It applies to any direct order,
                  whether it settles by Venmo, PayPal or anything else, because the order is
                  captured here first and payment is arranged afterwards. It does NOT apply
                  to Amazon orders, which Jeff never handles and cannot sign. */}
              {inquiryType === "Order Books" && (
                <>
                  {/* Copies first: it is the fact that shapes everything after it. */}
                  <input
                    type="number" name="quantity" min="1" max="500" step="1" required aria-required="true"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    aria-label="How many copies? Required."
                    placeholder="How many copies? *"
                    className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]"
                  />
                  <select
                    name="signing_request"
                    required
                    value={signingRequest}
                    onChange={(e) => setSigningRequest(e.target.value)}
                    className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]"
                  >
                    <option value="" disabled>Would you like the book signed? *</option>
                    <option value={SIGNING_PERSONALIZED}>Signed and personalized to a name</option>
                    <option value="Signed, no name">Signed, no name</option>
                    <option value="Neither, just the book">Neither, just the book</option>
                  </select>
                  {/* INSCRIPTIONS. One line per copy, shown only when personalization was
                      asked for, so the ~two thirds who did not ask never see any of this.
                      Above ten copies the per-copy list would be a wall of boxes, so it
                      collapses to a single textarea. Ten is a judgement call, not a
                      researched number: it is roughly where a stack of identical inputs
                      stops reading as a form and starts reading as a chore, and bulk
                      school orders are far past it either way. */}
                  {signingRequest === SIGNING_PERSONALIZED && (() => {
                    const n = Math.min(Math.max(parseInt(quantity, 10) || 1, 1), 500);
                    if (n === 1) {
                      return (
                        <>
                          <input
                            type="text" name="inscription_1" required aria-required="true"
                            aria-label="Who is it for, and what should it say? Required."
                            placeholder="Who is it for, and what should it say? *"
                            className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]"
                          />
                          <p className="-mt-1 px-1 text-sm text-[#5D6475]">For example, "For Emma." A first name is enough.</p>
                        </>
                      );
                    }
                    if (n <= 10) {
                      return (
                        <>
                          <p className="px-1 text-sm font-semibold text-[#1B2A4A]">What should each copy say?</p>
                          {Array.from({ length: n }, (_, i) => (
                            <input
                              key={i}
                              type="text" name={`inscription_${i + 1}`} required aria-required="true"
                              aria-label={`Inscription for copy ${i + 1} of ${n}. Required.`}
                              placeholder={`Copy ${i + 1} *`}
                              className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]"
                            />
                          ))}
                          <p className="-mt-1 px-1 text-sm text-[#5D6475]">For example, "For Emma." A first name is enough. Leave a copy blank to have it signed without a name.</p>
                        </>
                      );
                    }
                    return (
                      <>
                        <textarea
                          name="inscription_list" rows={6} required aria-required="true"
                          aria-label={`Inscriptions for all ${n} copies, one per line. Required.`}
                          placeholder={`One inscription per line, ${n} lines *`}
                          className="w-full rounded-[1.5rem] border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]"
                        />
                        <p className="-mt-1 px-1 text-sm text-[#5D6475]">One name per line, in order. Blank lines get signed without a name.</p>
                      </>
                    );
                  })()}

                  {/* SHIPPING ADDRESS — Order Books only. Split inputs rather than one
                      textarea, per the GOV.UK Design System addresses pattern: separate
                      inputs are what browser autocomplete fills, and autocomplete is what
                      satisfies WCAG 2.2 success criterion 1.3.5 Identify Input Purpose.
                      Every field carries its MDN autocomplete token.
                      Apartment line is optional and labelled so, because Baymard measured
                      30% of users coming to a full stop at a required-looking Address
                      Line 2. ZIP is type="text", not "number" — W3C warns type="number"
                      breaks postal codes. */}
                  <p className="px-1 pt-1 text-sm font-semibold text-[#1B2A4A]">Where should the book go?</p>
                  <input
                    type="text" name="ship_street" required aria-required="true" autoComplete="address-line1"
                    aria-label="Mailing address, where the book should be sent. Required."
                    placeholder="Mailing address (where the book should be sent) *"
                    className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]"
                  />
                  <input
                    type="text" name="ship_unit" autoComplete="address-line2"
                    aria-label="Apartment, suite, or unit. Optional."
                    placeholder="Apartment, suite, or unit (optional)"
                    className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]"
                  />
                  <div className="grid gap-4 sm:grid-cols-[1.4fr_0.8fr_0.8fr]">
                    <input
                      type="text" name="ship_city" required aria-required="true" autoComplete="address-level2"
                      aria-label="City. Required." placeholder="City *"
                      className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]"
                    />
                    <input
                      type="text" name="ship_state" required aria-required="true" autoComplete="address-level1"
                      aria-label="State. Required." placeholder="State *"
                      className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]"
                    />
                    <input
                      type="text" inputMode="numeric" name="ship_zip" required aria-required="true" autoComplete="postal-code"
                      aria-label="ZIP code. Required." placeholder="ZIP *"
                      className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]"
                    />
                  </div>
                  <p className="-mt-1 px-1 text-sm text-[#5D6475]">Your address is used only to mail your book. It is not shared, sold, or added to any list. US addresses only.</p>

                  {/* PAYMENT METHOD — asked here so Jeff can send the right instructions in
                      his first reply instead of spending an email finding out. Deliberately
                      NOT asking for a confirmation number: at this moment nothing has been
                      paid, so no confirmation number exists yet. And deliberately NOT asking
                      for a Venmo or PayPal handle: it is a persistent searchable identity,
                      it would sit next to a home address in a plaintext email, and Formspree's
                      own terms say not to use the service to collect sensitive personal data.
                      Payment is matched by an order reference Jeff issues in his reply, which
                      the buyer types into the payment note. */}
                  <select
                    name="payment_method" required aria-required="true"
                    aria-label="How would you like to pay? Required."
                    defaultValue=""
                    className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]"
                  >
                    <option value="" disabled>How would you like to pay? *</option>
                    <option value="Venmo">Venmo</option>
                    <option value="PayPal">PayPal</option>
                  </select>
                  {/* HOW TO PAY — added 2026-09-04, approved by Jess, logged as D-113.
                      Shown ONLY when the inquiry type is Order Books.

                      WHY THIS EXISTS. On 2026-09-03 a real customer ordered a signed copy.
                      Jeff received the order and no payment, and asked Jess "do I just send
                      the book?" The buyer had no idea where to pay, and Jeff had no idea
                      whether to ship. The old copy here said Jeff would email the details,
                      which put a human step between an order and its payment.

                      THIS REVERSES D-104, KNOWINGLY. That decision kept payment handles off
                      the page so a stranger could not pay with no order form attached, which
                      leaves Jeff holding money and no shipping address. Jess was shown that
                      reasoning again on 2026-09-04 and chose to publish anyway, because Jeff
                      prefers it and because the order form still comes first in practice.
                      Owner's call, made with the tradeoff in front of her. See D-113.

                      NO "goods and services" INSTRUCTION HERE, DELIBERATELY. Venmo's user
                      agreement says goods may only be sold via a business profile or a
                      buyer-tagged payment, so the compliant wording was drafted and then
                      REMOVED at Jess's instruction on 2026-09-04: it adds a step, and Jeff
                      has not confirmed he wants it. Open with Jeff, not forgotten. Until he
                      agrees, these are untagged personal payments for goods, which is
                      outside Venmo's terms. Recorded in D-113 so it is not lost.

                      The checkbox is required, so the browser blocks submission until it is
                      ticked, and it arrives in Jeff's order email as payment_understood: Yes.
                      That gives him a record the buyer saw the ship-after-payment terms.

                      Styling copies the established site callout (Books.tsx line 143):
                      gold left rule on cream. Nothing new was invented for the look. */}
                  <div className="rounded-r-[1.25rem] border-l-[3px] border-[#B8860B] bg-[#FBF6EC] px-5 py-4 text-sm leading-6 text-[#3A4152]">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1B2A4A]">How to pay</p>
                    <p className="mt-3">Nothing is charged on this page. Send payment after you submit this form. Jeff ships your book once payment arrives.</p>
                    <p className="mt-2">Put your <strong className="font-semibold text-[#1B2A4A]">first and last name</strong> in the payment note so Jeff can match your payment to this order.</p>
                    <p className="mt-3">
                      <strong className="font-semibold text-[#1B2A4A]">Venmo:</strong> @jkurrus
                      <br />
                      <strong className="font-semibold text-[#1B2A4A]">PayPal:</strong> jeffreyekurrus@gmail.com
                    </p>
                    <p className="mt-2">$12.95 per copy. Shipping is free.</p>
                    <label className="mt-4 flex items-start gap-3 text-[#3A4152]">
                      <input
                        type="checkbox"
                        name="payment_understood"
                        value="Yes"
                        required
                        aria-required="true"
                        className="mt-0.5 h-5 w-5 shrink-0 accent-[#4A7C59]"
                      />
                      <span>
                        I understand my book ships after payment is received.{" "}
                        <span aria-hidden="true">*</span>
                      </span>
                    </label>
                  </div>
                </>
              )}
              {/* Source attribution — always visible, required. Same field name and
                  placeholder as the SchoolVisits page so attribution reads consistently
                  across both intake paths. */}
              <input
                type="text"
                name="how_found"
                required
                placeholder="How you found Jeff (e.g. teacher referral, Nebraskaland Magazine, Google) *"
                className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]"
              />
              <textarea name="message" placeholder="Message" rows={7} required className="w-full rounded-[1.5rem] border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]" />
              <input type="hidden" name="_subject" value={emailSubject} />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <button type="submit" className="w-full rounded-full bg-[#1B2A4A] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#16233D]">
                Send Message
              </button>
            </form>
          </div>

          <div className="soft-card overflow-hidden">
            <div className="h-full min-h-[100%] p-8 sm:p-10 lg:p-12" style={{ backgroundImage: `linear-gradient(180deg, rgba(27,42,74,0.94), rgba(27,42,74,0.88)), url(${visualAssets.jkPhotography.heroPrairieGrass})`, backgroundSize: "cover", backgroundPosition: "center" }}>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">Why reach out</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Every book, school visit, and photo session started with a conversation.</h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-white/80">
                <p>If you're a teacher wondering whether your students would connect with a visiting author, the answer is yes. If you're a parent looking for senior portraits that actually look like your kid, not a stock photo, I'd love to talk.</p>
                <p>I work with schools across Nebraska, shoot portraits in the Gretna and Omaha area, and speak to book clubs and civic groups for free. Whatever you're thinking about, send a note. I'll get back to you.</p>
              </div>
              <div className="mt-8 border-t border-white/15 pt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">Direct</p>
                <a href="mailto:jeffreyekurrus@gmail.com" className="mt-3 block text-2xl font-semibold text-white transition hover:text-[#B8860B]">jeffreyekurrus@gmail.com</a>
              </div>
              <div className="mt-8 space-y-3">
                {siteMeta.socials.map((item) => (
                  <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="block rounded-full border border-white/15 bg-white/8 px-5 py-4 text-base font-semibold text-white transition hover:border-white/30 hover:bg-white/15">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick reasons people get in touch — gives the page substance + clear conversion paths (CONTACT-2) */}
      <section className="container pb-16 sm:pb-20">
        <h2 className="section-title-large">Why People Reach Out</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <Link href="/school-visits" className="rounded-[1.75rem] border-l-4 border-[#5F7752] bg-[#F2F7F0] p-6 shadow-[0_16px_32px_rgba(74,124,89,0.08)] transition hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5F7752]">School visits</p>
            <p className="mt-3 text-base leading-7 text-[#22304F]">Bring Jeff to your K-8 classroom for a 45-minute author visit.</p>
            <p className="mt-4 text-sm font-semibold text-[#5F7752]">See programs and pricing →</p>
          </Link>
          <Link href="/photography" className="rounded-[1.75rem] border-l-4 border-[#B8860B] bg-[#FBF6EC] p-6 shadow-[0_16px_32px_rgba(184,134,11,0.08)] transition hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B8860B]">Senior photo session</p>
            <p className="mt-3 text-base leading-7 text-[#22304F]">Outdoor portraits in Gretna, Omaha, and beyond. You own every image.</p>
            <p className="mt-4 text-sm font-semibold text-[#B8860B]">See packages →</p>
          </Link>
          <Link href="/books" className="rounded-[1.75rem] border-l-4 border-[#1B2A4A] bg-[#EEF1F6] p-6 shadow-[0_16px_32px_rgba(27,42,74,0.08)] transition hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1B2A4A]">Order books</p>
            <p className="mt-3 text-base leading-7 text-[#22304F]">Direct, signed, or in bulk for classrooms and gift orders.</p>
            <p className="mt-4 text-sm font-semibold text-[#1B2A4A]">See the catalog →</p>
          </Link>
          <a href={`mailto:${siteMeta.email}?subject=Media%20inquiry`} className="rounded-[1.75rem] border-l-4 border-[#7A6B5A] bg-[#F7F4EE] p-6 shadow-[0_16px_32px_rgba(122,107,90,0.08)] transition hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7A6B5A]">Media or interview</p>
            <p className="mt-3 text-base leading-7 text-[#22304F]">Press, podcasts, or community presentations.</p>
            <p className="mt-4 text-sm font-semibold text-[#7A6B5A]">Email Jeff →</p>
          </a>
        </div>
      </section>
    </div>
  );
}
