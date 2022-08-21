import styles from "./footer.module.css";
import logo from "../../assets/logo.png";
import telephone from "../../assets/telephone.png";
import mail from "../../assets/mail.png";
interface Props {}

const facebookURL =
  "https://www.facebook.com/campaign/landing.php?campaign_id=1666228021&extra_1=s%7Cc%7C321817137262%7Ce%7Cfacebook%27%7C&placement=&creative=321817137262&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1666228021%26adgroupid%3D65865938313%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D9060719%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwjIKYBhC6ARIsAGEds-IahiakeMwFiFzwpqBYqljjbbaRKbX5o_IBcbdnSoEXBagLgK_0wjwaAjKaEALw_wcB";
const twitterURL = "https://twitter.com/?lang=de";
const instagramURL = "https://www.instagram.com/";
const linkedinURL =
  "https://de.linkedin.com/?src=go-pa&trk=sem-ga_campid=17342682713_asid=137892267275_crid=600353195418_kw=linkedin_d=c_tid=kwd-148086543_n=g_mt=e_geo=9060719_slid=&mcid=6935667189886640128&cid=&gclid=Cj0KCQjwjIKYBhC6ARIsAGEds-L5jXE2zvaH0tMv0pyDDnPUy4gcISlTN1I553m2-BuMRJPKts4TiskaAt7QEALw_wcB&gclsrc=aw.ds";

export const Footer = (props: Props) => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLeft}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <p>492 Twisting Lane</p> <p>Beverly Hills, CA 90210</p>
        <p>us</p>
      </div>
      <div className={styles.footerRight}>
        <div className={styles.social}>
          <p>Social</p>
          <a href={facebookURL}>Facebook</a>
          <a href={twitterURL}>Twitter</a>
          <a href={instagramURL}>Instagram</a>
          <a href={linkedinURL}>LinkedIn</a>
        </div>
        <div className={styles.reachUs}>
          <p>Reach us</p>
          <a href="src/components/shared/Footer">Contact form</a>
          <div className={styles.telefon}>
            <img src={telephone} alt="Telephone-Icon" />
            <a href="src/components/shared/Footer">123456789</a>
          </div>
          <div className={styles.mail}>
            <img src={mail} alt="Mail-Icon" />
            <a href="src/components/shared/Footer">mail@mail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};
