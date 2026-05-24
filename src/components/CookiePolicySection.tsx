import "./cookie-policy-section.css";
import { cn } from "@/lib/utils";

type CookieRow = {
  name: string;
  purpose: string;
  provider: string;
  type: string;
  expires: string;
};

const ESSENTIAL_COOKIES: CookieRow[] = [
  {
    name: "FORM_SESSION_vGJXJ4",
    purpose:
      "We embed a third-party tool (Tally.so) to securely manage our 'Kindred Spirit Discovery' inquiry form. These cookies are strictly necessary for session handling and fraud prevention, do not track you across the web, and are automatically deleted when you close your browser.",
    provider: "tally.so",
    type: "html_local_storage",
    expires: "Persistent",
  },
  {
    name: "RESPONDENT",
    purpose:
      "We embed a third-party tool (Tally.so) to securely manage our Springer Application inquiry form. These cookies are strictly necessary for session handling and fraud prevention, do not track you across the web, and are automatically deleted when you close your browser.",
    provider: "tally.so",
    type: "html_local_storage",
    expires: "Persistent",
  },
];

const BROWSER_LINKS = [
  { label: "Chrome", href: "https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies" },
  {
    label: "Internet Explorer",
    href: "https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d",
  },
  {
    label: "Firefox",
    href: "https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US",
  },
  { label: "Safari", href: "https://support.apple.com/en-ie/guide/safari/sfri11471/mac" },
  {
    label: "Edge",
    href: "https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd",
  },
  { label: "Opera", href: "https://help.opera.com/en/latest/web-preferences/" },
];

const AD_OPT_OUT_LINKS = [
  { label: "Digital Advertising Alliance", href: "http://www.aboutads.info/choices/" },
  { label: "Digital Advertising Alliance of Canada", href: "https://youradchoices.ca/" },
  { label: "European Interactive Digital Advertising Alliance", href: "http://www.youronlinechoices.com/" },
];

function CookieTable({ row }: { row: CookieRow }) {
  return (
    <section className="cookie-policy-table" data-custom-class="body_text">
      <div className="cookie-policy-table-inner">
        <table>
          <tbody>
            <tr>
              <th>Name:</th>
              <td>
                <span>{row.name}</span>
              </td>
            </tr>
            <tr>
              <th>Purpose:</th>
              <td>
                <span>{row.purpose}</span>
              </td>
            </tr>
            <tr>
              <th>Provider:</th>
              <td>
                <span>{row.provider}</span>
              </td>
            </tr>
            <tr>
              <th>Type:</th>
              <td>
                <span>{row.type}</span>
              </td>
            </tr>
            <tr>
              <th>Expires in:</th>
              <td>
                <span>{row.expires}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p className="cookie-policy-spaced" data-custom-class="body_text">
      {children}
    </p>
  );
}

type CookiePolicySectionProps = {
  /** `page` = standalone route; `embedded` = inline block (legacy homepage placement) */
  variant?: "page" | "embedded";
};

const CookiePolicySection = ({ variant = "page" }: CookiePolicySectionProps) => {
  return (
    <section
      id="cookie-policy"
      className={cn(
        "bg-transparent",
        variant === "embedded" ? "border-t border-slate-200 py-16" : "py-8 md:py-12",
      )}
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="cookie-policy-document text-left" data-custom-class="body">
          <div data-custom-class="title">
            <h1>COOKIE POLICY</h1>
          </div>

          <p data-custom-class="subtitle">
            <strong>Last updated May 17, 2026</strong>
          </p>

          <BodyText>
            This Cookie Policy explains how Second Spring Companions (&quot;Company,&quot; &quot;we,&quot;
            &quot;us,&quot; and &quot;our&quot;) uses cookies and similar technologies to recognize you when you
            visit our website at{" "}
            <a
              href="https://www.secondspringcompanions.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              data-custom-class="link"
            >
              https://www.secondspringcompanions.co.uk
            </a>{" "}
            (&quot;Website&quot;). It explains what these technologies are and why we use them, as well as your
            rights to control our use of them.
          </BodyText>

          <BodyText>
            In some cases we may use cookies to collect personal information, or that becomes personal information
            if we combine it with other information.
          </BodyText>

          <h2 data-custom-class="heading_1">What are cookies?</h2>
          <BodyText>
            Cookies are small data files that are placed on your computer or mobile device when you visit a
            website. Cookies are widely used by website owners in order to make their websites work, or to work
            more efficiently, as well as to provide reporting information.
          </BodyText>
          <BodyText>
            Cookies set by the website owner (in this case, Second Spring Companions) are called
            &quot;first-party cookies.&quot; Cookies set by parties other than the website owner are called
            &quot;third-party cookies.&quot; Third-party cookies enable third-party features or functionality to be
            provided on or through the website (e.g., advertising, interactive content, and analytics). The parties
            that set these third-party cookies can recognize your computer both when it visits the website in
            question and also when it visits certain other websites.
          </BodyText>

          <h2 data-custom-class="heading_1">Why do we use cookies?</h2>
          <BodyText>
            We use first- and third-party cookies for several reasons. Some cookies are required for technical
            reasons in order for our Website to operate, and we refer to these as &quot;essential&quot; or
            &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and target the interests
            of our users to enhance the experience on our Online Properties. Third parties serve cookies through our
            Website for advertising, analytics, and other purposes. This is described in more detail below.
          </BodyText>

          <h2 data-custom-class="heading_1">How can I control cookies?</h2>
          <BodyText>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights
            by setting your preferences in the Cookie Preference Center. The Cookie Preference Center allows you to
            select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they
            are strictly necessary to provide you with services.
          </BodyText>
          <BodyText>
            The Cookie Preference Center can be found in the notification banner and on our Website. If you choose
            to reject cookies, you may still use our Website though your access to some functionality and areas of
            our Website may be restricted. You may also set or amend your web browser controls to accept or refuse
            cookies.
          </BodyText>
          <BodyText>
            The specific types of first- and third-party cookies served through our Website and the purposes they
            perform are described in the table below (please note that the specific cookies served may vary
            depending on the specific Online Properties you visit):
          </BodyText>

          <h3 data-custom-class="heading_2">Essential website cookies:</h3>
          <BodyText>
            These cookies are strictly necessary to provide you with services available through our Website and to
            use some of its features, such as access to secure areas.
          </BodyText>

          {ESSENTIAL_COOKIES.map((row) => (
            <CookieTable key={row.name} row={row} />
          ))}

          <h2 data-custom-class="heading_1">How can I control cookies on my browser?</h2>
          <BodyText>
            As the means by which you can refuse cookies through your web browser controls vary from browser to
            browser, you should visit your browser&apos;s help menu for more information. The following is
            information about how to manage cookies on the most popular browsers:
          </BodyText>
          <ul className="cookie-policy-list">
            {BROWSER_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" data-custom-class="link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <BodyText>
            In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would
            like to find out more information, please visit:
          </BodyText>
          <ul className="cookie-policy-list">
            {AD_OPT_OUT_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" data-custom-class="link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <h2 data-custom-class="heading_1">What about other tracking technologies, like web beacons?</h2>
          <BodyText>
            Cookies are not the only way to recognize or track visitors to a website. We may use other, similar
            technologies from time to time, like web beacons (sometimes called &quot;tracking pixels&quot; or
            &quot;clear gifs&quot;). These are tiny graphics files that contain a unique identifier that enables us
            to recognize when someone has visited our Website or opened an email including them. This allows us, for
            example, to monitor the traffic patterns of users from one page within a website to another, to deliver
            or communicate with cookies, to understand whether you have come to the website from an online
            advertisement displayed on a third-party website, to improve site performance, and to measure the
            success of email marketing campaigns. In many instances, these technologies are reliant on cookies to
            function properly, and so declining cookies will impair their functioning.
          </BodyText>

          <h2 data-custom-class="heading_1">Do you use Flash cookies or Local Shared Objects?</h2>
          <BodyText>
            Websites may also use so-called &quot;Flash Cookies&quot; (also known as Local Shared Objects or
            &quot;LSOs&quot;) to, among other things, collect and store information about your use of our services,
            fraud prevention, and for other site operations.
          </BodyText>
          <BodyText>
            If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash
            player to block Flash Cookies storage using the tools contained in the{" "}
            <a
              href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html"
              target="_blank"
              rel="noopener noreferrer"
              data-custom-class="link"
            >
              Website Storage Settings Panel
            </a>
            . You can also control Flash Cookies by going to the{" "}
            <a
              href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html"
              target="_blank"
              rel="noopener noreferrer"
              data-custom-class="link"
            >
              Global Storage Settings Panel
            </a>{" "}
            and following the instructions (which may include instructions that explain, for example, how to delete
            existing Flash Cookies (referred to &quot;information&quot; on the Macromedia site), how to prevent
            Flash LSOs from being placed on your computer without your being asked, and (for Flash Player 8 and
            later) how to block Flash Cookies that are not being delivered by the operator of the page you are on at
            the time).
          </BodyText>
          <BodyText>
            Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce
            or impede the functionality of some Flash applications, including, potentially, Flash applications used
            in connection with our services or online content.
          </BodyText>

          <h2 data-custom-class="heading_1">Do you serve targeted advertising?</h2>
          <BodyText>
            Third parties may serve cookies on your computer or mobile device to serve advertising through our
            Website. These companies may use information about your visits to this and other websites in order to
            provide relevant advertisements about goods and services that you may be interested in. They may also
            employ technology that is used to measure the effectiveness of advertisements. They can accomplish this
            by using cookies or web beacons to collect information about your visits to this and other sites in order
            to provide relevant advertisements about goods and services of potential interest to you. The
            information collected through this process does not enable us or them to identify your name, contact
            details, or other details that directly identify you unless you choose to provide these.
          </BodyText>

          <h2 data-custom-class="heading_1">How often will you update this Cookie Policy?</h2>
          <BodyText>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the
            cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this
            Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </BodyText>
          <BodyText>
            The date at the top of this Cookie Policy indicates when it was last updated.
          </BodyText>

          <h2 data-custom-class="heading_1">Where can I get further information?</h2>
          <BodyText>
            If you have any questions about our use of cookies or other technologies, please email us at{" "}
            <a href="mailto:info@secondspringcompanions.co.uk" data-custom-class="link">
              info@secondspringcompanions.co.uk
            </a>{" "}
            or contact us at Second Spring Companions.
          </BodyText>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicySection;

