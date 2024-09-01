import React from "react";
import Head from "next/head";
import PublicLayout from "@/layouts";

const TermsAndConditions = () => {
  return (
    <section className="main-container top-spacing bottom-spacing prose prose-sm">
      <h1 className="text-3xl font-bold">Terms and Conditions</h1>
      <p>Last updated: September 01, 2024</p>
      <h2 className="text-xl font-semibold">1. Introduction</h2>
      <p>
        Welcome to Wiki Weather. These Terms and Conditions ("Terms") govern
        your use of our website located at www.wikiweather.com (the "Website").
        By accessing or using our Website, you agree to be bound by these Terms.
        If you do not agree with any part of these Terms, you must not use our
        Website.
      </p>

      <h2 className="text-xl font-semibold">2. Use of the Website</h2>
      <p>
        You agree to use our Website only for lawful purposes and in accordance
        with these Terms. You agree not to:
      </p>
      <ul className="list-disc ml-6">
        <li>
          Use the Website in any way that violates any applicable local,
          national, or international law or regulation.
        </li>
        <li>
          Engage in any conduct that restricts or inhibits others' use or
          enjoyment of the Website, or which, as determined by us, may harm us
          or other users of the Website.
        </li>
        <li>
          Transmit any material that is unlawful, harassing, defamatory,
          obscene, fraudulent, or otherwise objectionable.
        </li>
        <li>
          Introduce any viruses, worms, or other harmful code to the Website.
        </li>
        <li>
          Attempt to gain unauthorized access to any portion of the Website or
          any systems or networks connected to the Website.
        </li>
      </ul>

      <h2 className="text-xl font-semibold">3. Intellectual Property</h2>
      <p>
        All content and materials on the Website, including but not limited to
        text, graphics, logos, images, as well as the underlying software, are
        the property of Wiki Weather or its licensors and are protected by
        intellectual property laws. You may not reproduce, distribute, or create
        derivative works from any content on the Website without our express
        written permission.
      </p>

      <h2 className="text-xl font-semibold">4. User Content</h2>
      <p>
        Any content you submit or post on the Website, including comments or
        reviews, must be accurate and not violate any third-party rights. By
        submitting content, you grant us a non-exclusive, royalty-free,
        perpetual, and worldwide license to use, reproduce, modify, and display
        such content.
      </p>

      <h2 className="text-xl font-semibold">5. Disclaimer of Warranties</h2>
      <p>
        The Website and all content and services provided are on an "as is" and
        "as available" basis. We make no warranties or representations about the
        accuracy, reliability, or completeness of the Website or its content. We
        do not warrant that the Website will be available or error-free.
      </p>

      <h2 className="text-xl font-semibold">6. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Wiki Weather shall not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages, or any loss of profits or data, arising out of or in connection
        with your use of the Website or these Terms.
      </p>

      <h2 className="text-xl font-semibold">7. Third-Party Links</h2>
      <p>
        Our Website may contain links to third-party websites. These links are
        provided for your convenience only. We do not control or endorse these
        sites and are not responsible for their content, privacy practices, or
        any damages resulting from your use of them. You access these sites at
        your own risk.
      </p>

      <h2 className="text-xl font-semibold">8. Changes to Terms</h2>
      <p>
        We reserve the right to update or modify these Terms at any time without
        prior notice. Changes will be effective when posted on the Website. Your
        continued use of the Website after any changes constitutes your
        acceptance of the revised Terms.
      </p>

      <h2 className="text-xl font-semibold">9. Termination</h2>
      <p>
        We may suspend or terminate your access to the Website at any time,
        without notice, for any reason, including if we believe you have
        violated these Terms. Upon termination, your right to use the Website
        will cease immediately.
      </p>

      <h2 className="text-xl font-semibold">10. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of India. Any disputes arising out of or in connection with these
        Terms or the use of the Website shall be subject to the exclusive
        jurisdiction of the courts in India.
      </p>

      <h2 className="text-xl font-semibold">11. Contact Us</h2>
      <p>
        If you have any questions or concerns about these Terms and Conditions,
        please contact us at{" "}
        <a
          href="mailto:info@wikiweather.com"
          className="text-blue-600 hover:underline"
        >
          info@wikiweather.com
        </a>
        .
      </p>
    </section>
  );
};

export default TermsAndConditions;
