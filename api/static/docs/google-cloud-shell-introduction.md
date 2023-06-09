# راهنمای استفاده از Google Cloud Shell

Google Cloud Shell یک محیط توسعه و مدیریت بر اساس وب برای اجرای دستورات در Google Cloud Platform (GCP) است. با استفاده از Cloud Shell، می‌توانید دستورات را مستقیماً در مرورگر خود اجرا کرده و به منابع و سرویس‌های مختلف GCP دسترسی پیدا کنید. این محیط دارای یک محیط مطالعه پیش‌فرض با دسترسی به ابزارهای مفید مانند Google Cloud SDK، Docker، Git و غیره است.

در این مقاله، به شما نحوه کار با Google Cloud Shell را در قالب یک فایل Markdown (`.md`) توضیح خواهیم داد.

## مراحل استفاده از Google Cloud Shell

1. باز کردن مرورگر: برای شروع، به آدرس [https://shell.cloud.google.com](https://shell.cloud.google.com/) در مرورگر خود بروید.

2. ورود به حساب Google: در صفحه Google Cloud Shell، وارد حساب Google خود شوید. در صورتی که از یک حساب Google پیش‌فرض برای ورود به مرورگر استفاده می‌کنید، بصورت خودکار وارد شده و نیازی به ورود مجدد نخواهید داشت.

3. انتخاب پروژه: پس از ورود به Google Cloud Shell، می‌توانید پروژه‌ای که می‌خواهید با آن کار کنید را انتخاب کنید. برای این منظور، از منوی بالای صفحه، پروژه مورد نظر را انتخاب کنید یا با استفاده از دستور زیر پروژه را تعیین کنید:

   ```
   gcloud config set project <PROJECT_ID>
   ```

   که `<PROJECT_ID>` باید با شناسه پروژه مورد نظر خود جایگزین شود.

4. استفاده از دستورات: در Google Cloud Shell، می‌توانید دستوراتی را که نیاز دارید وارد کنید. نتایج اجرای دستورات را می‌توانید در قسمت خروجی مشاهده کنید.

5. استفاده از ابزارهای GCP: با استفاده از دستورات CLI مرتبط با ابزارهای GCP، می‌توانید با این ابزارها کار کنید و عملیاتی مانند ایجاد ماشین‌های مجازی، مدیریت ذخیره‌سازی، راه‌اندازی خدمات و غیره را انجام دهید.

6. ذخیره سازی و بازیابی اطلاعات: اطلاعات و فایل‌هایی که در Google Cloud Shell ایجاد می‌کنید، ذخیره می‌شوند و می‌توانید به آن‌ها در مراحل بعدی دسترسی داشته باشید. همچنین، می‌توانید از ابزارهای مانند `git` برای مدیریت و کنترل نسخه فایل‌های خود استفاده کنید.

7. بستن Cloud Shell: پس از اتمام کار با Cloud Shell، می‌توانید آن را ببندید. برای این کار، کافیست دستور `exit` را وارد کنید یا روی دکمه "بستن" در بالای صفحه کلیک کنید.

## خلاصه

Google Cloud Shell یک ابزار قدرتمند برای توسعه و مدیریت در محیط Google Cloud Platform است. با استفاده از Cloud Shell، می‌توانید دستورات را مستقیماً در مرورگر خود اجرا کرده و به منابع و سرویس‌های GCP دسترسی پیدا کنید. با دنبال کردن مراحل مشروح در این مقاله، شما می‌توانید با Google Cloud Shell آشنا شوید و از قدرت آن برای توسعه و مدیریت در GCP بهره‌برداری کنید.