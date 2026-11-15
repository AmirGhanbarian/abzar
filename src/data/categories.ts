import type { Category, CategoryId } from '../types'

export type { CategoryId }

export const categories: Category[] = [
  {
    id: 'drills',
    name: 'Drills & Drivers',
    icon: 'Zap',
    tagline: 'Drill, drive, hammer',
  },
  {
    id: 'saws',
    name: 'Saws',
    icon: 'Scissors',
    tagline: 'Cut through anything',
  },
  {
    id: 'grinders',
    name: 'Grinders',
    icon: 'Disc3',
    tagline: 'Grind, cut, polish',
  },
  {
    id: 'sanders',
    name: 'Sanders',
    icon: 'Wind',
    tagline: 'Smooth every surface',
  },
  {
    id: 'multi-tools',
    name: 'Multi-Tools',
    icon: 'Settings2',
    tagline: 'One tool, many jobs',
  },
  {
    id: 'combo',
    name: 'Combo Kits',
    icon: 'Package',
    tagline: 'The whole arsenal',
  },
]
