import type { Category, CategoryId } from '../types'

export type { CategoryId }

export const categories: Category[] = [
  {
    id: 'drills',
    name: 'دریل و پیچ‌گوشتی',
    icon: 'Zap',
    tagline: 'سوراخ‌کاری، پیچ‌انداختن، چکش‌کاری',
  },
  {
    id: 'saws',
    name: 'اره‌ها',
    icon: 'Scissors',
    tagline: 'هرچه هست را ببرید',
  },
  {
    id: 'grinders',
    name: 'سنگ‌فرزینه',
    icon: 'Disc3',
    tagline: 'سنگ‌زنی، برش، صیقل',
  },
  {
    id: 'sanders',
    name: 'سمباده',
    icon: 'Wind',
    tagline: 'صاف کردن هر سطحی',
  },
  {
    id: 'multi-tools',
    name: 'ابزار چندکاره',
    icon: 'Settings2',
    tagline: 'یک ابزار، کارهای متعدد',
  },
  {
    id: 'combo',
    name: 'ست کامل',
    icon: 'Package',
    tagline: 'کل تجهیزات',
  },
]
