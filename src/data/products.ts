import type { Product } from '../types'

/**
 * Image assets are hosted on a stable CDN (re-hosted from public web sources).
 * They are referenced by URL rather than committed as binaries to keep the
 * repository lightweight.
 *
 * قیمت‌ها به دلار آمریکا ذخیره می‌شوند و در زمان نمایش با ضریب نرخ برابر
 * ۱۰۰٬۰۰۰ به تومان تبدیل می‌شوند (تابع formatPrice).
 */
export const heroImage =
  'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/934bbb52d87c.jpg'

export const featuredImage =
  'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7a618a1037ba.jpg'

/** نرخ تبدیل دلار به تومان برای نمایش قیمت. */
const TOMAN_RATE = 100_000

export const products: Product[] = [
  // ── دریل و پیچ‌گوشتی ───────────────────────────────────────────────
  {
    id: 'abzar-x1-drill',
    name: 'دریل پیچ‌گوشتی براشلس X1 باتری ۲۰ ولت',
    brand: 'ابزار پرو',
    category: 'drills',
    price: 149,
    compareAtPrice: 189,
    rating: 4.8,
    reviews: 1284,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/29828ff9ee88.png',
    badge: 'bestseller',
    blurb: 'دریل براشلس ۱/۲ اینچ با گشتاور ۷۵۰ اینچ-پوند و گیربکس فلزی دو سرعته.',
    description:
      'دریل X1 ابزاری است که برای جایگزینی سه ابزار ساخته‌ایم. موتور براشلس تا ۷۵۰ اینچ-پوند گشتاور می‌دهد، گیربکس فلزی دو سرعته در برابر ضربات کارگاه مقاوم است و سه‌نظام ۱/۲ اینچی چرخشی مته‌های کاربیدی را بدون لغزش نگه می‌دارد. چراغ LED داخلی سایه‌ها را در تیرها از بین می‌برد و باتری ۲.۰ آمپری در هر بار شارژ تا ۳۵۰ پیچ را می‌کوبد.',
    specs: [
      { label: 'موتور', value: 'براشلس' },
      { label: 'گشتاور بیشینه', value: '۷۵۰ اینچ-پوند' },
      { label: 'سه‌نظام', value: 'فلزی چرخشی ۱/۲ اینچ' },
      { label: 'سرعت‌ها', value: '۲ سرعته (۰-۵۵۰ / ۰-۲۱۰۰ دور)' },
      { label: 'باتری', value: '۲۰ ولت، ۲.۰ آمپر' },
      { label: 'وزن', value: '۳.۴ پوند' },
    ],
    inStock: true,
  },
  {
    id: 'abzar-t18-impact',
    name: 'پیچ‌گوشتی ضربه‌ای براشلس T18 باتری ۲۰ ولت',
    brand: 'ابزار پرو',
    category: 'drills',
    price: 129,
    rating: 4.9,
    reviews: 982,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5dda4f433a3b.jpg',
    badge: 'new',
    blurb: 'گشتاور شکستن ۱٬۸۰۰ اینچ-پوند در بدنه فشرده ۵ اینچی.',
    description:
      'پیچ‌های شش‌پر، بولت‌های مهاری و پیچ‌های عرشه — T18 همه را بدون سرخوردگی می‌کوبد. حالت PrecisionDrive چند دور اول را ملایم می‌کند تا پیچ نشکند، سپس به گشتاور کامل ۱٬۸۰۰ اینچ-پوندی می‌رسد. با طول فقط ۵ اینچ بین دو ستون ۱۶ اینچی جا می‌شود و سه‌نظام هگز ۱/۴ اینچی مته‌ها را یک‌دست آزاد می‌کند.',
    specs: [
      { label: 'موتور', value: 'براشلس' },
      { label: 'گشتاور بیشینه', value: '۱٬۸۰۰ اینچ-پوند' },
      { label: 'سه‌نظام', value: 'هگز ۱/۴ اینچ، بارگذاری سریع' },
      { label: 'سرعت‌ها', value: '۴ حالت (شامل PrecisionDrive)' },
      { label: 'ضربه', value: '۰-۳٬۸۰۰ ضربه در دقیقه' },
      { label: 'وزن', value: '۲.۶ پوند' },
    ],
    inStock: true,
  },
  {
    id: 'abzar-rh1-rotary',
    name: 'دریل چکشی براشلس RH1 با SDS-Plus باتری ۲۰ ولت',
    brand: 'ابزار پرو',
    category: 'drills',
    price: 219,
    compareAtPrice: 259,
    rating: 4.8,
    reviews: 276,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ad3581c1ef81.jpg',
    badge: 'sale',
    blurb: 'انرژی ضربه ۱.۹ ژول — مانند دریل برقی بتن را سوراخ می‌کند.',
    description:
      'وقتی مشخصات به انکوراژ در دال نیاز دارد، RH1 به کار می‌آید. موتور براشلس ۱.۹ ژول انرژی ضربه را از سه‌نظام SDS-Plus عبور می‌دهد و سوراخ‌های ۵/۸ اینچی را در بتن ریزی در چند ثانیه می‌تراشد. سه حالت — چکشی دورانی، فقط دورانی، فقط چکشی — نصب انکور و تراشه‌کاری سبک را پوشش می‌دهد.',
    specs: [
      { label: 'موتور', value: 'براشلس' },
      { label: 'انرژی ضربه', value: '۱.۹ ژول' },
      { label: 'سه‌نظام', value: 'SDS-Plus' },
      { label: 'حالت‌ها', value: '۳ حالت (دریل / چکش / اسکنه)' },
      { label: 'نرخ بتن‌کاری', value: 'تا ۵/۸ اینچ' },
      { label: 'وزن', value: '۵.۵ پوند' },
    ],
    inStock: true,
  },
  {
    id: 'abzar-iw20-wrench',
    name: 'آچار بکس ضربه‌ای براشلس IW20 باتری ۲۰ ولت',
    brand: 'ابزار پرو',
    category: 'drills',
    price: 179,
    rating: 4.7,
    reviews: 412,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4e303feadb13.jpg',
    blurb: 'گشتاور شکستن ۱٬۲۰۰ فوت-پوند با حالت خارج‌کردن بولت.',
    description:
      'مهره‌های چرخ، بولت‌های U و اتصالات یخ‌زده تعلیق — IW20 همه را باز می‌کند و درست همان لحظه‌ای که بست شل می‌شود متوقف می‌شود، به‌لطف کنترل خارج‌کردن بولت ۴ حالته. موتور براشلس ۱٬۲۰۰ فوت-پوند گشتاور شکستن و ۹۰۰ فوت-پوند گشتاور بستن تولید می‌کند، همگی روی باتری ۴.۰ آمپری.',
    specs: [
      { label: 'موتور', value: 'براشلس' },
      { label: 'گشتاور شکستن', value: '۱٬۲۰۰ فوت-پوند' },
      { label: 'بستن', value: '۹۰۰ فوت-پوند' },
      { label: 'آنویل', value: '۱/۲ اینچ حلقه اصطکاکی' },
      { label: 'حالت‌ها', value: '۴ حالت (شامل خارج‌کردن بولت)' },
      { label: 'وزن', value: '۵.۱ پوند' },
    ],
    inStock: true,
  },

  // ── اره‌ها ───────────────────────────────────────────────────────────
  {
    id: 'abzar-cs7-circular',
    name: 'اره گرد براشلس CS7 با تیغه ۷-۱/۴ اینچ',
    brand: 'ابزار پرو',
    category: 'saws',
    price: 169,
    rating: 4.7,
    reviews: 612,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/27bc2fff67df.jpg',
    badge: 'bestseller',
    blurb: 'چوب‌های ۲ اینچی را در ۹۰° یک‌باره برش می‌دهد — تیغه ۵٬۸۰۰ دور.',
    description:
      'اره گرد براشلس ۷-۱/۴ اینچی که چوب‌های ۲ اینچی را در زاویه ۹۰° برش می‌دهد و تا ۵۶° مورب می‌شود. کفشک منیزیومی پس از افتادن صاف می‌ماند، ترمز الکتریکی تیغه را در کمتر از دو ثانیه متوقف می‌کند و چراغ LED خط برش را روشن می‌کند. عمق برش تا ۲-۷/۱۶ اینچ در ۹۰° و ۱-۳/۴ اینچ در ۴۵°.',
    specs: [
      { label: 'تیغه', value: '۷-۱/۴ اینچ، ۲۴ دندانه کاربیدی' },
      { label: 'دور', value: '۵٬۸۰۰ دور در دقیقه' },
      { label: 'عمق برش در ۹۰°', value: '۲-۷/۱۶ اینچ' },
      { label: 'مورب', value: '۰-۵۶°' },
      { label: 'کفشک', value: 'منیزیومی' },
      { label: 'وزن', value: '۶.۴ پوند' },
    ],
    inStock: true,
  },
  {
    id: 'abzar-rs9-recip',
    name: 'اره متقابل براشلس RS9',
    brand: 'ابزار پرو',
    category: 'saws',
    price: 159,
    rating: 4.6,
    reviews: 388,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/fcb311b6f0b6.jpg',
    blurb: 'حرکت تیغه ۱-۱/۸ اینچ، ۳٬۰۰۰ SPM، با چرخش بدون ابزار برای برش‌های عمودی.',
    description:
      'تخریب و هرس در یک ابزار. RS9 تیغه ۱-۱/۸ اینچی را با حداکثر ۳٬۰۰۰ حرکت در دقیقه می‌تکاند، با ماشه سرعت‌متغیر و نگهدارنده تیغه بدون‌ابزار که ۱۸۰° می‌چرخد تا برش‌های عمودی در گچ و PVC ممکن شود. کفشک چهارحالته عمر تیغه را افزایش می‌دهد.',
    specs: [
      { label: 'طول حرکت', value: '۱-۱/۸ اینچ' },
      { label: 'حداکثر SPM', value: '۳٬۰۰۰' },
      { label: 'نگهدارنده تیغه', value: 'بدون ابزار، کفشک ۴ حالته' },
      { label: 'موتور', value: 'براشلس' },
      { label: 'باتری', value: '۲۰ ولت، ۲.۰ آمپر' },
      { label: 'وزن', value: '۵.۲ پوند' },
    ],
    inStock: true,
  },
  {
    id: 'abzar-jv4-jigsaw',
    name: 'اره عمودبر براشلس سرعت‌متغیر JV4',
    brand: 'ابزار پرو',
    category: 'saws',
    price: 139,
    rating: 4.6,
    reviews: 298,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/fa6d47a4d45a.jpg',
    blurb: '۳٬۵۰۰ SPM با آونگ ۴ مرحله‌ای برای برش‌های منحنی سریع و تمیز.',
    description:
      'برش‌های سینکی، منحنی‌کاری و کنده‌کاری کابینت با JV4 تمیزتر از آب درمی‌آید. موتور براشلس تا ۳٬۵۰۰ حرکت در دقیقه می‌دهد و عمل آونگی چهارمرحله‌ای تهاجمی بودن تیغه را برای چوب سخت، تخته یا فلز تنظیم می‌کند. کفشک با چراغ LED و دمنده خرده‌ها خط برش را مرئی نگه می‌دارد.',
    specs: [
      { label: 'حداکثر SPM', value: '۳٬۵۰۰' },
      { label: 'طول حرکت', value: '۱ اینچ' },
      { label: 'آونگ', value: '۴ مرحله‌ای' },
      { label: 'مورب', value: '۰-۴۵°، بدون ابزار' },
      { label: 'نوع تیغه', value: 'T-shank، بدون ابزار' },
      { label: 'وزن', value: '۴.۱ پوند' },
    ],
    inStock: false,
  },
  {
    id: 'abzar-ts10-tablesaw',
    name: 'اره میزی کارگاهی قابل‌حمل TS10 با تیغه ۱۰ اینچ',
    brand: 'ابزار پرو',
    category: 'saws',
    price: 399,
    compareAtPrice: 449,
    rating: 4.8,
    reviews: 187,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/9a0b141de94d.jpeg',
    badge: 'sale',
    blurb: 'ظرفیت برش طولی ۲۵ اینچ با فلز دنده‌ای و تیغه ۴٬۸۰۰ دور.',
    description:
      'اره میزی کارگاهی که ورقه‌ها را یک‌باره برش می‌دهد. موتور براشلس ۱۵ آمپری تیغه ۱۰ اینچی را با ۴٬۸۰۰ دور می‌چرخاند، فلز دنده‌ای تا ۲۵ اینچ ظرفیت برش طولی موازی می‌ماند و فضای ذخیره‌سازی روی دستگاه فلز راهنما، گونیا و چوب هل‌دهنده را جای می‌دهد. به یک گاری چرخ‌دار برای بستر کامیون تا می‌شود.',
    specs: [
      { label: 'تیغه', value: '۱۰ اینچ، ۲۴ دندانه کاربیدی' },
      { label: 'دور', value: '۴٬۸۰۰ دور در دقیقه' },
      { label: 'ظرفیت برش طولی', value: '۲۵ اینچ راست / ۱۲ اینچ چپ' },
      { label: 'فلز راهنما', value: 'دنده‌ای-پینیونی' },
      { label: 'ظرفیت دودو', value: '۱۳/۱۶ اینچ' },
      { label: 'وزن', value: '۵۲ پوند' },
    ],
    inStock: true,
  },
  {
    id: 'abzar-ms10-miter',
    name: 'اره مایتری ترکیبی کشویی MS10 با تیغه ۱۰ اینچ',
    brand: 'ابزار پرو',
    category: 'saws',
    price: 349,
    rating: 4.7,
    reviews: 231,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/29fc94c76011.png',
    blurb: 'چوب ۴×۴ را یک‌باره برش می‌دهد — کشویی ترکیبی، مایتری ۰-۵۲° دو طرفه.',
    description:
      'کرن، ناودان و برش ۴×۴ با MS10 زاویه‌دار می‌شود. تیغه ۱۰ اینچی روی ریل کشویی دوگانه برای برش عرضی تا ۱۲ اینچ حرک می‌کند، مایتری در ۰-۵۲° چپ و راست قفل می‌شود و مورب با توقفات مثبت تا ۴۸° کج می‌شود. چراغ خط برش LED و خروجی خرده‌چوب کار را تمیز نگه می‌دارد.',
    specs: [
      { label: 'تیغه', value: '۱۰ اینچ، ۴۰ دندانه کاربیدی' },
      { label: 'برش عرضی', value: 'تا ۱۲ اینچ' },
      { label: 'مایتری', value: '۰-۵۲° چپ / ۰-۶۰° راست' },
      { label: 'مورب', value: '۰-۴۸°، دوگانه' },
      { label: 'ظرفیت برش', value: '۲×۱۲ در ۹۰°' },
      { label: 'وزن', value: '۴۱ پوند' },
    ],
    inStock: true,
  },

  // ── سنگ‌فرزینه ───────────────────────────────────────────────────────
  {
    id: 'abzar-ag4-grinder',
    name: 'سنگ‌فرزینه براشلس AG4 با دیسک ۴-۱/۲ اینچ',
    brand: 'ابزار پرو',
    category: 'grinders',
    price: 89,
    compareAtPrice: 109,
    rating: 4.6,
    reviews: 455,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a2252ad72775.jpg',
    badge: 'sale',
    blurb: '۸٬۵۰۰ دور با دستگیره باریک، محافظ بدون ابزار و ضد-راه‌اندازی.',
    description:
      'سنگ‌فرزینه فشرده‌ای که در دست ناپدید می‌شود. موتور براشلس زیر بار ۸٬۵۰۰ دور نگه می‌دارد، محافظ قابل‌تنظیم بدون ابزار بدون آچار جابجا می‌شود و حفاظت ضد-راه‌اندازی از چرخش تصادفی پس از نوسان برق جلوگیری می‌کند. با دیسک‌های ۴-۱/۲ و ۵ اینچی سازگار است.',
    specs: [
      { label: 'دیسک', value: '۴-۱/۲ / ۵ اینچ' },
      { label: 'دور بدون بار', value: '۸٬۵۰۰' },
      { label: 'محافظ', value: 'بدون ابزار' },
      { label: 'موتور', value: 'براشلس' },
      { label: 'اسپیندل', value: '۵/۸-۱۱' },
      { label: 'وزن', value: '۴.۰ پوند' },
    ],
    inStock: true,
  },

  // ── سمباده ────────────────────────────────────────────────────────────
  {
    id: 'abzar-os5-sander',
    name: 'سمباده مداری تصادفی OS5 با صفحه ۵ اینچ',
    brand: 'ابزار پرو',
    category: 'sanders',
    price: 99,
    rating: 4.5,
    reviews: 342,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d8f4180b9f56.png',
    badge: 'new',
    blurb: 'صفحه ۵ اینچ، ۱۲٬۰۰۰ OPM، هوک‌اند‌لوپ — پرداخت بدون رد گردابی.',
    description:
      'سمباده‌کاری بین لایه‌ها بدون رد گردابی. OS5 با ۱۲٬۰۰۰ OPM و صفحه هوک‌اند‌لوپ ۵ اینچی می‌چرخد و دایل سرعت‌متغیر برای کار ظریف یا برداشتن ماده آن را تنظیم می‌کند. پوشش لاستیکی لرزش را خنثی می‌کند و خروجی گردوغبار شلنگ جاروبرقی ۱ اینچی را می‌پذیرد تا کارگاه تمیز بماند.',
    specs: [
      { label: 'صفحه', value: '۵ اینچ هوک‌اند‌لوپ' },
      { label: 'OPM', value: '۷٬۰۰۰-۱۲٬۰۰۰' },
      { label: 'مدار', value: 'تصادفی، ۳/۳۲ اینچ' },
      { label: 'سرعت', value: 'دایل متغیر' },
      { label: 'خروجی گردوغبار', value: 'جاروبرقی ۱ اینچ' },
      { label: 'وزن', value: '۲.۵ پوند' },
    ],
    inStock: true,
  },

  // ── ابزار چندکاره ────────────────────────────────────────────────────
  {
    id: 'abzar-mt3-multitool',
    name: 'ابزار چندکاره نوسانی براشلس MT3 باتری ۲۰ ولت',
    brand: 'ابزار پرو',
    category: 'multi-tools',
    price: 119,
    rating: 4.6,
    reviews: 264,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/83e0f9a315d7.jpg',
    blurb: '۲۰٬۰۰۰ OPM با تعویض بدون‌ابزار اکسسوری — برش، سمباده، تراشک.',
    description:
      'ابزاری که همیشه روی گاری بازسازی می‌ماند. MT3 با حداکثر ۲۰٬۰۰۰ OPM نوسان می‌کند و نگهدارنده اکسسوری تعویض‌سریع تیغه‌ها و صفحات را بدون آچار هگز عوض می‌کند. برش عمودی گچ، زیرکشی ستونی در، تراشک چسب و سمباده‌کاری ظریف — همگی روی یک باتری ۲.۰ آمپری.',
    specs: [
      { label: 'موتور', value: 'براشلس' },
      { label: 'حداکثر OPM', value: '۲۰٬۰۰۰' },
      { label: 'زاویه نوسان', value: '۳.۲°' },
      { label: 'نگهدارنده اکسسوری', value: 'بدون ابزار' },
      { label: 'باتری', value: '۲۰ ولت، ۲.۰ آمپر' },
      { label: 'وزن', value: '۲.۸ پوند' },
    ],
    inStock: true,
  },

  // ── ست‌های کامل ─────────────────────────────────────────────────────
  {
    id: 'abzar-combo-6',
    name: 'ست کامل ۶ ابزاری براشلس باتری ۲۰ ولت',
    brand: 'ابزار پرو',
    category: 'combo',
    price: 599,
    compareAtPrice: 799,
    rating: 4.9,
    reviews: 156,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7a618a1037ba.jpg',
    badge: 'sale',
    blurb: 'دریل، پیچ‌گوشتی، اره گرد، اره متقابل، ابزار چندکاره، چراغ + ۲ باتری.',
    description:
      'هرچه یک تیم نازک‌کاری روی پلتفرم ۲۰ ولت نیاز دارد، در یک کیف چرخ‌دار. این ست دریل X1 و پیچ‌گوشتی ضربه‌ای T18 را با اره گرد ۷-۱/۴ اینچی، اره متقابل، ابزار چندکاره نوسانی و چراغ منطقه‌ای LED جفت می‌کند، به‌علاوه دو باتری ۴.۰ آمپری، شارژر سریع و دو کیف. خرید ست نسبت به خرید جداگانه هر ابزار ۲۵٪ صرفه‌جویی دارد.',
    specs: [
      { label: 'ابزارهای شامل', value: '۶' },
      { label: 'باتری‌ها', value: '۲ × ۴.۰ آمپر' },
      { label: 'شارژر', value: 'سریع، ۶۰ دقیقه‌ای' },
      { label: 'پلتفرم', value: '۲۰ ولت' },
      { label: 'صرفه‌جویی ست', value: '۲۵٪ نسبت به تک‌فروشی' },
      { label: 'گارانتی', value: '۳ ساله' },
    ],
    inStock: true,
  },
]

/**
 * قیمت را به تومان تبدیل و با ارقام فارسی قالب‌بندی می‌کند.
 * ورودی به دلار آمریکا است و با TOMAN_RATE ضرب می‌شود.
 */
export const formatPrice = (usd: number) => {
  const toman = Math.round(usd * TOMAN_RATE)
  return new Intl.NumberFormat('fa-IR').format(toman) + ' تومان'
}
