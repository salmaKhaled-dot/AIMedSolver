const locales = ["en-GB", "ar-EG"];

function getFlagSrc(countryCode) {
    return /^[A-Z]{2}$/.test(countryCode)
        ? `https://www.countryflagicons.com/SHINY/64/${countryCode.toUpperCase()}.png`
        : "";
}

function translatePage(language) {
    const isArabic = language === "ar-EG";

    const translations = {
        "en-GB": {
            title: "AI Diagnostic Analyzer",
            subtitle: "Complete AI Detection",
            "share-text": "Share",
            "how-to-use": "How to Use It?",
            "Use-description":
                "The patient's pictures and any medical information must be uploaded.",
            "how-can-help": "How Can It Help You?",
            "help-description":
                "Our AI medical diagnosis is designed to help doctors diagnose and classify illnesses and conditions more quickly.",
            "tips-heading": "Tips for Staying Healthier",
            tip1: "Stay active: Engage in regular physical activity to keep your weight in check, boost your energy levels, and promote overall well-being.",
            tip2: "Eat a balanced diet: Include a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats in your meals. Limit processed foods and sugary snacks.",
            tip3: "Get enough sleep: Aim for 7-9 hours of quality sleep each night to support your immune system, improve concentration, and enhance mood.",
            tip4: "Practice good hygiene: Wash your hands frequently, cover your mouth when coughing or sneezing, and maintain cleanliness in your surroundings.",
            tip5: "Schedule regular check-ups: Visit your healthcare provider for routine check-ups, screenings, and vaccinations to stay on top of your health and detect any potential issues early.",
            "analysis-heading": "What Should I Do with the Analysis?",
            "analysis-description":
                "You should use the analysis to empower yourself and learn more about your results, but not to diagnose yourself with a medical condition.",
            "follow-us-heading": "Follow Us",
            "news-heading": "News",
            "about-us-heading": "About Us",
            "home-link": "Home",
            "findDoctor-link": "Find a Doctor",
            "aiDiagnose-link": "AI Diagnose",
            "diagnose-1":
                "The AI will diagnose and analyze, and then deliver the findings to you.",
            "diagnose-2":
                "The results will contain information on the disorder if any, as well as any associated health risks.",
            "diagnose-3": "Please call us if you have any questions.",
            "warning-link": "Warning",
            "nearYou-link": "Near You",
            "help-1":
                "The AI will diagnose and analyze, and then deliver the findings to you.Our technology can analyze symptoms, medical history, and relevant data using artificial intelligence to deliver accurate information and allow individual treatment plans.",
            "help-2":
                "Additionally, it can examine medical images like X-rays and CT scans to help find issues.",
            "help-3":
                "Patients gain from customized health information, early disease detection, and proactive well-being management.",
            "help-4":
                "We are committed to enhancing healthcare by using AI to improve diagnosis, treatment, and empowerment for both healthcare professionals and patients.",
            AI1: "Analyzes",
            AI2: "MRI",
        },

        "ar-EG": {
            title: "محلل تشخيص الذكاء الاصطناعي",
            subtitle: "كشف ذكاء اصطناعي كامل",
            "share-text": "شارك",
            "how-to-use": "كيف يمكنك استخدامه؟",
            "Use-description": "يجب تحميل صور المريض وأي معلومات طبية.",
            "how-can-help": "كيف يمكن أن يساعدك؟",
            "help-description":
                "تم تصميم تشخيصنا الطبي باستخدام الذكاء الاصطناعي لمساعدة الأطباء في تشخيص وتصنيف الأمراض والحالات بشكل أسرع.",
            "tips-heading": "نصائح للبقاء صحيًا",
            tip1: "كن نشطًا: اشترك في النشاط البدني النظامي للحفاظ على وزنك وتعزيز مستويات طاقتك وتعزيز الصحة العامة.",
            tip2: "تناول نظام غذائي متوازن: ضمن تشكيلة متنوعة من الفواكه والخضروات والحبوب الكاملة والبروتينات النباتية والدهون الصحية في وجباتك. قلل من الأطعمة المصنعة والوجبات الخفيفة الغنية بالسكر.",
            tip3: "احصل على قسط كافٍ من النوم: حاول الهدف إلى 7-9 ساعات من النوم الجودة كل ليلة لدعم جهاز المناعة الخاص بك وتحسين التركيز وتعزيز المزاج.",
            tip4: " النظافة الجيدة: اغسل يديك بشكل متكرر وغطي فمك عند السعال أو العطس وحافظ على نظافة محيطك.",
            tip5: "جدولة الفحوصات الدورية: قم بزيارة مقدم الرعاية الصحية الخاص بك للفحوص الروتينية والفحوصات والتطعيمات للبقاء بصحة جيدة واكتشاف أي مشاكل صحية محتملة مبكرًا.",
            "analysis-heading": "ماذا يجب أن أفعل مع التحليل؟",
            "analysis-description":
                "يجب عليك استخدام التحليل لتمكين نفسك ومعرفة المزيد عن نتائجك، ولكن لا تقوم بتشخيص نفسك بأي حالة",
            "follow-us-heading": "تابعنا",
            "news-heading": "الأخبار",
            "about-us-heading": "من نحن",
            "home-link": "الصفحة الرئيسية",
            "findDoctor-link": "البحث عن طبيب",
            "aiDiagnose-link": "التشخيص بالذكاء الاصطناعي",
            "warning-link": "الطوارئ",
            "nearYou-link": "بالقرب منك",
            "how-to-use": "كيف يمكنك استخدامه؟",
            "diagnose-1":
                "سيقوم الذكاء الاصطناعي بالتشخيص والتحليل، ثم يقدم النتائج لك.",
            "diagnose-2":
                "ستحتوي النتائج على معلومات حول الاضطراب إن وجد، بالإضافة إلى أي مخاطر صحية مرتبطة.",
            "diagnose-3": "يرجى الاتصال بنا إذا كان لديك أي أسئلة.",
            "how-can-help": "كيف يمكن أن يساعدك؟",
            "help-1":
                "يمكن أن تحلل تكنولوجيا الذكاء الاصطناعي الأعراض والتاريخ الطبي والبيانات ذات الصلة لتقديم معلومات دقيقة والسماح بخطط علاج فردية.",
            "help-2":
                "بالإضافة إلى ذلك، يمكنها فحص الصور الطبية مثل الأشعة السينية والأشعة المقطعية للمساعدة في الكشف عن المشكلات.",
            "help-3":
                "يستفيد المرضى من معلومات صحية مخصصة وكشف مبكر للأمراض وإدارة الصحة الوقائية.",
            "help-4":
                "نحن ملتزمون بتحسين الرعاية الصحية من خلال استخدام الذكاء الاصطناعي لتحسين التشخيص والعلاج وتمكين كل من المهنيين الصحيين والمرضى.",
            AI1: "تحليل",
            AI2: "اشعة الرنين المغناطيسي",
        },
    };

    for (const key in translations[language]) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translations[language][key];
            if (isArabic) {
                element.classList.add("arabic-style");
            } else {
                element.classList.remove("arabic-style");
            }
        }
    }

    const rtlContainer = document.querySelector(".rtl-container");
    if (rtlContainer) {
        if (isArabic) {
            rtlContainer.classList.add("arabic-style");
        } else {
            rtlContainer.classList.remove("arabic-style");
        }
    }
}

function setSelectedLocale(locale) {
    const intlLocale = new Intl.Locale(locale);
    const langName = new Intl.DisplayNames([locale], {
        type: "language",
    }).of(intlLocale.language);

    const dropdownBtn = document.getElementById("dropdown-btn");
    dropdownBtn.innerHTML = `<img src="${getFlagSrc(
        intlLocale.region
    )}" /> ${langName}`;

    translatePage(locale);
}

function handleLanguageSelection() {
    const dropdownBtn = document.getElementById("dropdown-btn");
    const dropdownContent = document.getElementById("dropdown-content");
    let isDropdownOpen = false;

    dropdownBtn.addEventListener("click", function () {
        if (isDropdownOpen) {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
        isDropdownOpen = !isDropdownOpen;
    });

    locales.forEach((locale) => {
        const intlLocale = new Intl.Locale(locale);
        const langName = new Intl.DisplayNames([locale], {
            type: "language",
        }).of(intlLocale.language);

        const listEl = document.createElement("li");
        listEl.innerHTML = `<img src="${getFlagSrc(
            intlLocale.region
        )}" /> ${langName}`;

        listEl.addEventListener("click", function () {
            setSelectedLocale(locale);
            dropdownContent.style.display = "none";
            isDropdownOpen = false;
        });

        dropdownContent.appendChild(listEl);
    });
}

handleLanguageSelection();
setSelectedLocale(locales[0]);
