import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Home": "Home",
          "About": "About Us",
          "InvitedSpeakers": "Invited Speakers",
          "CongressMenu": "Congress 2024",
          "PresidentInvitation": "President's Invitation",   
          "Venue": "Venue",
          "Registration": "Registration",
          "Programm": "Scientific Program",
          "Contacts": "Contact",
          "ImportantDates": "Important Dates",
          "ImportantDatesDescription": "Announcing the 4th KAO National Congress and the 2nd TAO Balkan Congress! These premier events for ophthalmology professionals offer a unique platform to explore advancements, share research, and collaborate on future developments in eye care.",
          "congress4th": "4th KAO National Congress & 2nd TAO Balkan Congress",

        //   Letter

          "firstParagraph": "Dear Colleagues and friends,",
          "secondParagraph": "On behalf of the Organizing and Scientific Committees, it is my great privilege and pleasure to welcome you to the 4th National and 2nd Balkan Congress that will be take place in Prishtina.",
          "thirdParagraph": "We are happy to announce that this time 2nd Balkan Congress will be joining us in our 4th National Congress. This presents a great opportunity for the exchange experiences and innovative ideas in the treatment of various problems in ophthalmology.",
          "4thParagraph": "Unique topics and friendly atmosphere will help to enjoy two days exclusive scientific program, presented by world knowed speakers. In Pristina, you can meet very friendly people and enjoy delightful cuisine. Additionally, the city offers a unique blend of modern culture and rich history, making it an attractive destination for visitors. Young people in Kosovo are dynamic, ambitious, and deeply connected to both their heritage and the broader global community. Fluent in multiple languages, they navigate between traditional values and modern influences with ease.",
          "5thParagraph": "Let’s get together, to meet old friends and new ones and learn from each other.",
          "6thParagraph": "Looking forward to welcoming you all in Prishtina.",
          "7thParagraph": "President of Kosovo Association of Ophthalmologists",
          
        //  AboutPage

          "TitleAbout": "Ophthalmological Society of Kosova - OSK",
          "1stAboutDescription": "OSK was established in 2002 in Pristina. The founders of this society are:  Prof. Dr. Kelmend Spahiu, Prof. Dr. Gazmend Kaçaniku and Prof. Dr. Naser Salihu.",
          "2ndAboutDescription": "The purpose of the society is the education and training of ophthalmologists of the Republic of Kosova, the exchange of experiences as well as protection of their interests. To meet these goals OSK will organize seminars, presentations, professional meetings with national and international character. Special importance will be given to cooperation with other societies. OSK is a regular member of the ICO (International Council of Ophthalmology) and also in the process of admission to the SOE (European Society of Ophthalmology).",
          "3rdAboutDescription": "The society has 95 members. They have given their contribution for development of modern ophthalmology by participating in national and international meetings.",
          "4thAboutDescription": "Dear members of OSK, I wish you success in the future and also invite you for further cooperation in order of professional improvement.",
          "OurTeam": "Our Team",
          "DescriptionTeam": "Our society brings together leading experts who are passionate about improving vision health and setting new standards in ophthalmology.",

        // Register Page  

          "Register": "Register",
          "registerDescription": "Welcome to our registration page! Register for conference participation.",
          "simpleRegistration": "Simple & Secure Registration",
          "simpleDescriptionRegister": "After filling out the registration form, you will be informed in detail via email about the payment method and everything else.",
          "Please fill out the form below": "Please fill out the form below",
          "InstitutionTitle": "Institution Title",
          "Title": "Title (Dr, Professor, Mr, Ms, Mrs)",
          "FirstName": "First Name",
          "LastName": "Last Name",
          "Address": "Address",
          "City": "City",
          "Country": "Country",
          "PhoneNumber": "Phone Number",
          "registrationPricing": "Registration Pricing",
          "registrationType": 'Registration Type',
          "memberPrice": "Member Price",
          "nonmemberPrice": "Non-Member Price",
          "earlyRegistration": "Early Registration",
          "kaoMember": "Member of KAO",
          "lateRegistration": "Late Registration",
          "notKaoMember": "Not Member of KAO",

        // Venue Page

          "VenueTitle": "Prishtina Selected as Venue for 4th National Congress and 2nd Balkan Congress",
          "VenueDescription": "Hey there! Get ready for an amazing conference experience in the friendly city of Prishtina, Kosovo's lively capital! Join us for the monumental 4th National and 2nd Balkan Congress alongside the groundbreaking Ophthalmology Revolution Congress. Don't miss out on this incredible opportunity, October 25th and 26th, 2024.",
          "1stEmeraldHotel": "Nestled in the heart of Pristina, where the vibrant cityscape meets the tranquility of upscale hospitality, lies Hotel Emerald, an oasis of elegance and charm. From the moment you step into our opulent foyer, adorned with glistening chandeliers and contemporary art pieces that reflect the city's rich cultural tapestry, you'll feel enveloped in a world of sophistication and warmth.",
          "2ndEmeraldHotel": "Each corner of Hotel Emerald whispers tales of luxury and comfort, inviting you to unwind and indulge in the pleasures of refined living. Our meticulously designed rooms and suites blend modern aesthetics with timeless elegance, offering a sanctuary where every detail is curated to perfection. Sink into plush bedding adorned with the finest linens, and awaken to panoramic views of Pristina's skyline, painting the dawn sky with hues of gold and amber.",
          "ExactLocation": "Exact location of the place where the conference will be held",
          "1stDate": "The Date of",
          "2ndDate": "will be on",
          "exactDate": "25 - 26 October 2024",
          "countdownTo": "Countdown to Congress",
          "days": 'Days',
          "hours": "Hours",
          "minutes": "Minutes",
          "seconds": "Sekonds",

        //Importand dates
        "firstImportant": "Registration Opens",
        "firstImportantDescription": "Early registration deadline: 10th September 2024",
        "secondImportant": "Abstract Submission Deadline",
        "secondImportantDescription": "Submission deadline: 10th September 2024",
        "pleaseSubmit": "Please submit your abstract to the email address:",
        "thirdImportant": "Abstract Acceptance Notification",
        "thirdImportantDescription": "Notification by: 20th September 2024",
        "fourthImportant": "Conference Begins",
        "fourthImportantDescription": "Starting on: 25th October 2024",
        "View Details": "View Details",

        // Our Invited Speakers Page
        
          "OurInvitedSpeakersTitle": "Our Invited Speakers",
          "OurInvitedSpeakersDescription": "We are excited to introduce the esteemed speakers for the 4th National Congress and 2nd Balkan Congress of Ophthalmology. Each expert will share valuable insights and expertise in the field of ophthalmology. Here is the list of invited speakers who will join us for this remarkable event. We look forward to their inspiring presentations and engaging discussions.",

        // Contact Page
        
          "ContactUs": "Contact Us",
          "GetInTouch": "Get in touch with us",
          "OurLocation": "Our Location",
          "EmailAddress": "Email Address"
        }
      },
       
      alb: {
        translation: {
          "Home": "Ballina",
          "About": "Rreth Nesh",
          "InvitedSpeakers": "Ligjëruesit e ftuar",   
          "CongressMenu": "Kongresi 2024",
          "PresidentInvitation": "Ftesa e Presidentit", 
          "Venue": "Vendi",
          "Registration": "Regjistrimi",
          "Programm": "Programi Shkencor",
          "Contacts": "Kontakti",
          "ImportantDates": "Datat me rëndësi",
          "ImportantDatesDescription": "Shpallim Kongresin e 4-të Kombëtar të KAO-s dhe Kongresin e 2-të Ballkanik të TAO-s! Këto ngjarje kryesore për profesionistët e oftalmologjisë ofrojnë një platformë unike për të eksploruar përparimet, për të shkëmbyer kërkime dhe për të bashkëpunuar në zhvillimet e ardhshme në kujdesin ndaj syve.",
          "congress4th": "Kongresi i 4-të Kombëtar i KAO-s dhe Kongresi i 2-të Ballkanik i TAO-s",

        //   Letter

          "firstParagraph": "Të nderuar kolegë dhe miq,",
          "secondParagraph": "Në emër të Komitetit Organizativ dhe Shkencor, kam privilegjin dhe kënaqësinë time të madhe t'ju uroj mirëseardhjen në Kongresin e IV-të Kombëtar dhe të 2-të Ballkanik që do të mbahet në Prishtinë.",
          "thirdParagraph": "Jemi të lumtur të njoftojmë se këtë herë Kongresi i 2-të Ballkanik do të na bashkangjitet në Kongresin tonë të 4-të Kombëtar. Kjo paraqet një mundësi të shkëlqyer për shkëmbimin e përvojave dhe ideve inovative në trajtimin e problemeve të ndryshme në oftalmologji.",
          "4thParagraph": "Temat unike dhe atmosfera miqësore do t'ju ndihmojnë të shijoni një program ekskluziv shkencor dyditor. Në Prishtinë mund të takoni njerëz shumë të sjellshëm dhe të shijoni një kuzhinë të mrekullueshme. Gjithashtu, qyteti ofron një kombinim unik të kulturës moderne dhe historisë së pasur, duke e bërë atë një destinacion tërheqës për vizitorët. Të rinjtë në Kosovë janë dinamikë, ambiciozë dhe thellësisht të lidhur si me trashëgiminë e tyre ashtu edhe me komunitetin global më të gjerë. Ata shpesh shfaqin një ndjenjë të fortë të krenarisë kombëtare dhe një dëshirë për të kontribuar në zhvillimin dhe modernizimin e vendit të tyre. Të rrjedhshëm në disa gjuhë, ata lëvizin me lehtësi midis vlerave tradicionale dhe ndikimeve moderne.",
          "5thParagraph": "Le të mblidhemi, të takojmë miq të vjetër dhe të rinj dhe të mësojmë nga njëri-tjetri.",
          "6thParagraph": "Ju mirëpresim të gjithëve në Prishtinë.",
          "7thParagraph": "Kryetar i Shoqatës së Oftalmologëve të Kosovës",
          
        //   AboutPage

          "TitleAbout": "SHOQATA E OFTALMOLOGËVE TË KOSOVËS – SHOFK",
          "1stAboutDescription": "SHOFK është themeluar në vitin 2002 në Prishtinë. Themeluesit e kësaj shoqate janë: Prof. Dr. Kelmend Spahiu, Prof. Dr. Gazmend Kaçaniku dhe Prof. Dr. Naser Salihu.",
          "2ndAboutDescription": "Qëllimi i shoqatës është edukimi dhe aftësimi professional i oftalmologëve të Republikës së Kosovës, shkëmbimi i përvojave si dhe mbrojtja e interesave të tyre. Për t’i përmbushur këto qëllime SHOFK do të organizojë seminare, prezentime, tubime profesionale me karakter kombëtar dhe ndërkombëtar. Bashkëpunimit me shoqatat tjera do t’i kushtohet një rëndësi e veçantë. SHOFK është anëtare e rregullt e ICO (International Council of Ophthalmology) si dhe është në procesin përfundimtar të pranimit në SOE (European Society of Ophthalmology).",
          "3rdAboutDescription": "Shoqata ka 95 anëtarë, të cilët me pjesëmarrjen aktive të tyre si në tubimet kombëtare ashtu edhe ne ndërkombëtare kanë dhënë kontributin e tyre në zhvillimin e oftalmologjisë moderne.",
          "4thAboutDescription": "Anëtarëve të SHOFK ju dëshiroj suksese edhe në të ardhmen dhe njëherit i ftoj për bashkëpunim të mëtejshëm me qëllim të ngritjes profesionale.",
          "OurTeam": "Ekipi ynë",
          "DescriptionTeam": "Shoqata jonë mbledh së bashku ekspertë kryesorë të cilët janë të apasionuar pas përmirësimit të shëndetit të shikimit dhe vendosjes së standardeve të reja në oftalmologji.",

          // Register Page

          "Register": "Regjistrohu",
          "registerDescription": "Mirë se vini në faqen tonë të regjistrimit! Regjistrohuni për pjesëmarrjen në konferencë.",
          "simpleRegistration": "Regjistrim i Thjeshtë dhe i Sigurt",
          "simpleDescriptionRegister": "Pas plotësimit të formularit të regjistrimit, do të informoheni në detaje përmes email-it për metodën e pagesës dhe gjithçka tjetër.",
          "Please fill out the form below": "Ju lutemi plotësoni formularin e mëposhtëm",
          "InstitutionTitle": "Emri i Institucionit",
          "Title": "Titulli (Dr, Profesor, Mr, Ms, Mrs)",
          "FirstName": "Emri",
          "LastName": "Mbiemri",
          "Address": "Adresa",
          "City": "Qyteti",
          "Country": "Shteti",
          "PhoneNumber": "Nr.tel",
          "registrationPricing" : "Cmimi i regjistrimit",
          "registrationType": "Lloji i regjistrimit",
          "memberPrice": "Cmimi për anëtar",
          "nonmemberPrice": "Cmimi për jo-anëtar",
          "earlyRegistration": "Regjistrimi i hershëm",
          "kaoMember": "Anëtar i KAO-s",
          "lateRegistration": "Regjistrim i mëvonshëm",
          "notKaoMember": "Jo anëtar i KAO-s",

          // Venue Page

          "VenueTitle": "Prishtina u zgjodh si vend i Kongresit të 4-të Kombëtar dhe Kongresit të 2-të Ballkanik",
          "VenueDescription": "Hejj! Bëhuni gati për një përvojë të mrekullueshme konferencash në qytetin mik të Prishtinës, kryeqytetin e gjallë të Kosovës! Bashkohuni me ne në Kongresin e 4-të Kombëtar dhe të 2-të Ballkanik monumental krahas Kongresit novator të Revolucionit të Oftalmologjisë. Mos e humbisni këtë mundësi të jashtëzakonshme më 25 dhe 26 tetor 2024.",
          "1stEmeraldHotel": "I vendosur në zemër të Prishtinës, ku peizazhi i gjallë i qytetit takohet me qetësinë e mikpritjes luksoze, ndodhet Hotel Emerald, një oaz elegance dhe sharmi. Që nga momenti që hyni në hollin tonë të pasur, të stolisur me llambadarë vezullues dhe pjesë të artit bashkëkohor që pasqyrojnë tapiceri të pasur kulturore të qytetit, do të ndiheni të mbështjellë në një botë sofistikimi dhe ngrohtësie.",
          "2ndEmeraldHotel": "Çdo cep i Hotel Emerald pëshpërit përralla luksi dhe rehatie, duke ju ftuar të çlodheni dhe të kënaqeni me kënaqësitë e jetesës së rafinuar. Dhomat dhe suitat tona të dizajnuara me përpikëri ndërthurin estetikën moderne me elegancën e përjetshme, duke ofruar një vend të shenjtë ku çdo detaj është i kuruar në përsosmëri. Zhytuni në shtrat prej pelushi të stolisur me rrobat më të mira dhe zgjohuni me pamjet panoramike të horizontit të Prishtinës, duke pikturuar qiellin e agimit me nuancat e arit dhe qelibarit.",
          "ExactLocation": "Vendndodhja e saktë e vendit ku do të mbahet konferenca",
          "1stDate": "Data e mbajtjes",
          "2ndDate": "do të jetë më",
          "exactDate": "25 - 26 Tetor 2024",
          "countdowntTo": "Deri në Kongres",
          "days": "Ditë",
          "hours": "Orë",
          "minutes": "Minuta",
          "seconds": "Sekonda",

          "firstImportant": "Regjistrimi i hapur",
          "firstImportantDescription": "Afati i regjistrimit të hershëm: 10 shtator 2024",
          "secondImportant": "Afati për paraqitjen e abstraktit",
          "secondImportantDescription": "Afati i dorëzimit: 10 shtator 2024",
          "pleaseSubmit": "Ju lutemi, dorëzoni abstraktin tuaj në e-mail adresen:",
          "thirdImportant": "Njoftimi për pranimin e abstraktit",
          "thirdImportantDescription": "Njoftimi më datën: 20 shtator 2024",
          "fourthImportant": "Dita e Konferences",
          "fourthImportantDescription": "Fillon më: 25 tetor 2024",
          "View Details": "Shiko Detajet",

          // Our Invited Speaker Page

          "OurInvitedSpeakersTitle": "Ligjëruesit e ftuar",
          "OurInvitedSpeakersDescription": "Kemi kënaqësinë të prezantojmë folësit e nderuar për Kongresin e 4-të Kombëtar dhe Kongresin e 2-të Ballkanik të Oftalmologjisë. Çdo ekspert do të ndajë njohuri dhe ekspertizë të vlefshme në fushën e oftalmologjisë. Këtu është lista e folësve të ftuar që do të na bashkohen për këtë ngjarje të jashtëzakonshme. Mezi presim prezantimet e tyre frymëzuese dhe diskutimet angazhuese.",

          // Contact Page

          "ContactUs": "Na kontaktoni",
          "GetInTouch": "Kontaktoni me ne",
          "OurLocation": "Lokacioni ynë",
          "EmailAddress": "E-mail adresa"
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
