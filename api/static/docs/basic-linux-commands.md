# دستورات مقدماتی ترمینال لینوکس

1. فایل و دایرکتوری:
- `ls`: نمایش فهرست فایل‌ها و پوشه‌ها در دایرکتوری فعلی.
- `pwd`: نمایش مسیر دایرکتوری فعلی (مسیر کامل).
- `cd`: تغییر دایرکتوری کاری (Current Working Directory).
- `mkdir`: ایجاد یک پوشه جدید.
- `rm`: حذف فایل یا پوشه.
- `cp`: کپی کردن فایل یا پوشه.
- `mv`: جابجایی یا تغییر نام فایل یا پوشه.
- `touch`: ایجاد یک فایل جدید یا به روزرسانی زمان و تاریخ فایل موجود.

2. جستجو:
- `find`: جستجوی فایل‌ها و پوشه‌ها بر اساس شرایط مشخص.
- `grep`: جستجوی الگو در متن فایل یا خروجی دیگری.
- `locate`: جستجوی سریع فایل‌ها و پوشه‌ها در پایگاه داده از پیش ساخته شده.
- `which`: پیدا کردن مسیر اجرای یک برنامه.

3. نمایش و ویرایش فایل:
- `cat`: نمایش محتوای یک یا چند فایل.
- `more`: نمایش محتوای یک فایل صفحه به صفحه.
- `less`: نمایش محتوای یک فایل با استفاده از اسکرول.
- `head`: نمایش ابتدای یک فایل.
- `tail`: نمایش انتهای یک فایل.
- `nano`: ویرایش فایل با ویرایشگر متنی Nano.
- `vim`: ویرایش فایل با ویرایشگر متنی Vim.

4. مجوزها و دسترسی:
- `chmod`: تغییر مجوزهای فایل یا پوشه.
- `chown`: تغییر مالکیت فایل یا پوشه.
- `chgrp`: تغییر گروه فایل یا پوشه.
- `sudo`: اجرای یک کامند با دسترسی مدیر (superuser).

5. فشرده‌سازی و بازگشایی:
- `tar`: ساختن یک فایل تار و بازگشایی آن.
- `gzip`: فشرده‌سازی فایل‌ها با الگوریتم gzip.
- `gunzip`: بازگشایی فایل‌های فشرده شده با gzip.
- `zip`: ساختن یک فایل فشرده با فرمت zip.
- `unzip`: بازگشایی فایل‌های فشرده با فرمت zip.

---

فایل و دایرکتوری

```bash
ls
```

مسیر دایرکتوری فعلی

```bash
pwd
```

تغییر دایرکتوری کاری

```bash
cd /path/to/directory
```

ایجاد پوشه جدید

```bash
mkdir my_directory
```

حذف فایل

```bash
rm my_file.txt
```

کپی کردن فایل

```bash
cp my_file.txt /path/to/destination
```

تغییر نام یا جابجایی فایل

```bash
mv my_file.txt new_file.txt
```

ایجاد فایل جدید

```bash
touch new_file.txt
```

جستجو

```bash
find /path/to/directory -name "*.txt"
```

جستجو در متن فایل

```bash
grep "pattern" my_file.txt
```

جستجوی سریع

```bash
locate my_file.txt
```

پیدا کردن مسیر اجرای برنامه

```bash
which program_name
```

نمایش محتوای فایل

```bash
cat my_file.txt
```

نمایش محتوای فایل صفحه به صفحه

```bash
more my_file.txt
```

نمایش محتوای فایل با استفاده از اسکرول

```bash
less my_file.txt
```

نمایش ابتدای فایل

```bash
head my_file.txt
```

نمایش انتهای فایل

```bash
tail my_file.txt
```

ویرایش فایل با استفاده از ویرایشگر Nano

```bash
nano my_file.txt
```

ویرایش فایل با استفاده از ویرایشگر Vim

```bash
vim my_file.txt
```

تغییر مجوزهای فایل یا پوشه

```bash
chmod 755 my_file.txt
```

تغییر مالکیت فایل یا پوشه

```bash
chown username my_file.txt
```

تغییر گروه فایل یا پوشه

```bash
chgrp groupname my_file.txt
```

ساختن فایل تار

```bash
tar -cvf archive.tar file1.txt file2.txt
```

بازگشایی فایل تار

```bash
tar -xvf archive.tar
```

فشرده‌سازی فایل با استفاده از gzip

```bash
gzip my_file.txt
```

بازگشایی فایل فشرده gzip

```bash
gunzip my_file.txt.gz
```

ساختن فایل فشرده zip

```bash
zip my_archive.zip file1.txt file2.txt
```

بازگشایی فایل فشرده zip

```bash
unzip my_archive.zip
```