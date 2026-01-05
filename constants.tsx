
import React from 'react';
import { StyleOption } from './types';

export const STYLES: StyleOption[] = [
  {
    id: 'alps-cottage',
    name: 'Alps Chalet',
    category: 'Culture',
    description: 'Cozy timber construction, fur throws, and mountain warmth.',
    prompt: 'Transform this into an Alps Chalet style. Use extensive timber cladding, stone fireplaces, cozy fur throws, plaid wool textiles, and warm ambient lighting suitable for an alpine retreat.',
    thumbnail: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'american-craftsman',
    name: 'American Craftsman',
    category: 'Culture',
    description: 'Natural materials, built-ins, and handcrafted charm.',
    prompt: 'Redesign this as an American Craftsman home. Emphasize heavy woodwork, built-in shelving, stained glass windows, tapered columns, and a focus on handcrafted natural materials.',
    thumbnail: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'art-deco',
    name: 'Art Deco',
    category: 'Period',
    description: 'Geometric shapes, bold lines, and luxurious metallic accents.',
    prompt: 'Redesign this space in Art Deco style. Use geometric patterns, bold vertical lines, rich materials like velvet and marble, and metallic accents in gold or chrome.',
    thumbnail: 'https://images.unsplash.com/photo-1612487528505-d2338264c821?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'bauhaus',
    name: 'Bauhaus',
    category: 'Culture',
    description: 'Form follows function, geometric shapes, and primary colors.',
    prompt: 'Transform this into a Bauhaus style design. Focus on "form follows function," use geometric shapes, tubular steel furniture, and accents of primary colors (red, yellow, blue) against white walls.',
    thumbnail: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'biophilic',
    name: 'Biophilic Design',
    category: 'Culture',
    description: 'Bringing the outdoors in with plants and natural light.',
    prompt: 'Transform this space using Biophilic Design principles. Incorporate abundant indoor plants, living green walls, maximizing natural light, and using natural materials like wood and bamboo.',
    thumbnail: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'bohemian',
    name: 'Bohemian',
    category: 'Culture',
    description: 'Eclectic patterns, lush plants, and artistic freedom.',
    prompt: 'Transform this into a Bohemian sanctuary. Use layered textiles, mismatched vintage furniture, plenty of indoor plants (monstera, ferns), and macramé wall hangings.',
    thumbnail: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'bulgarian-traditional',
    name: 'Bulgarian Traditional',
    category: 'Culture',
    description: 'Dark carved wood, colorful geometric textiles, and rustic warmth.',
    prompt: 'Redesign this interior in Traditional Bulgarian Revival style. Use dark wood paneling and exposed beams, colorful red and geometric patterned woven rugs (kilims), stone fireplaces, white plaster walls, and rustic wooden furniture.',
    thumbnail: 'https://images.unsplash.com/photo-1703356294065-e3d60f038a0a?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'brazilian-modernist',
    name: 'Brazilian Modernist',
    category: 'Culture',
    description: 'Raw concrete, local hardwoods, and tropical integration.',
    prompt: 'Redesign this in Brazilian Modernist style. Use sweeping concrete forms, warm local hardwood paneling, floor-to-ceiling glass, and lush indoor tropical gardens.',
    thumbnail: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'chinoiserie',
    name: 'Chinoiserie',
    category: 'Culture',
    description: 'East-meets-West with intricate patterns and nature motifs.',
    prompt: 'Transform this using Chinoiserie aesthetics. Use hand-painted wallpapers with birds and flowers, blue and white porcelain, bamboo faux finishes, and lacquered furniture.',
    thumbnail: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'contemporary',
    name: 'Contemporary',
    category: 'Culture',
    description: 'Fluid, current, and state-of-the-art sophistication.',
    prompt: 'Redesign this in a sleek Contemporary style. Use current trends, fluid lines, state-of-the-art lighting fixtures, mixed metals, and a sophisticated neutral palette with bold accent art.',
    thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'desert-modernism',
    name: 'Desert Modernism',
    category: 'Culture',
    description: 'Architecture that blends seamlessly with arid landscapes.',
    prompt: 'Redesign this in Desert Modern style. Focus on indoor-outdoor living, floor-to-ceiling glass, deep overhangs, natural stone walls, and a color palette derived from the desert landscape (sage, sand, rust).',
    thumbnail: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'french-provincial',
    name: 'French Provincial',
    category: 'Culture',
    description: 'Elegant curves, soft colors, and rustic refinement.',
    prompt: 'Transform this into a French Provincial design. Use ornate white-washed furniture, cabriole legs, soft lavender or cream tones, and delicate floral patterns.',
    thumbnail: 'https://images.unsplash.com/photo-1598603396168-4d3efd660a42?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'german-gemutlichkeit',
    name: 'German Gemütlichkeit',
    category: 'Culture',
    description: 'Warm, inviting comfort with solid craftsmanship and convivial atmosphere.',
    prompt: 'Redesign this interior with German Gemütlichkeit in mind. Create a space of warmth, friendliness, and good cheer. Use solid wood furniture, warm lighting, comfortable seating arrangements, and traditional touches that invite relaxation and social connection.',
    thumbnail: 'https://images.unsplash.com/photo-1529408686214-b48b8532f72c?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'greek-cycladic',
    name: 'Greek Cycladic',
    category: 'Culture',
    description: 'Iconic blue and white, soft curves, and sun-drenched minimalism.',
    prompt: 'Reimagine this in Greek Cycladic architecture. Use whitewashed walls, cobalt blue accents, soft rounded corners, stone-paved floors, and minimalist sun-drenched interiors.',
    thumbnail: 'https://images.unsplash.com/photo-1688664562000-4c1f7cdb48f8??auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'indian-heritage',
    name: 'Indian Heritage',
    category: 'Culture',
    description: 'Jali screens, silk textiles, and warm earthy pigments.',
    prompt: 'Redesign this with Indian Heritage elements. Use intricate carved Jali screens, rich silk fabrics, brass ornaments, terracotta accents, and a palette of turmeric and indigo.',
    thumbnail: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'industrial-loft',
    name: 'Industrial Loft',
    category: 'Culture',
    description: 'Raw materials, exposed brick, and urban character.',
    prompt: 'Redesign this in an Industrial Loft style. Feature exposed red brick walls, black metal piping, oversized windows, reclaimed wood, and Edison bulb lighting.',
    thumbnail: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'japandi',
    name: 'Japandi',
    category: 'Culture',
    description: 'A hybrid of Japanese aesthetics and Scandinavian functionality.',
    prompt: 'Redesign this space in Japandi style. Blend Japanese rustic minimalism with Scandinavian functionality. Use warm oak wood, soft neutral tones, low-profile furniture, and decluttered open spaces.',
    thumbnail: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'japanese-zen',
    name: 'Japanese Zen',
    category: 'Culture',
    description: 'Minimalist, natural wood, and serene simplicity.',
    prompt: 'Redesign this interior/exterior with Japanese Zen aesthetics. Use light wood (shoji), tatami mats, minimalist furniture, and a focus on ma (negative space).',
    thumbnail: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'lived-in-eclecticism',
    name: 'Lived-in Eclecticism',
    category: 'Culture',
    description: 'A personal, curated mix of eras with a cozy, inhabited feel.',
    prompt: 'Redesign this space in a Lived-in Eclecticism style. Create a curated, personal look with mixed vintage and modern furniture, layered rugs, books, art, and meaningful clutter. Aim for a cozy, inhabited atmosphere rather than a showroom look.',
    thumbnail: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'materiality-nature',
    name: 'Materiality & Nature',
    category: 'Culture',
    description: 'Focus on raw textures, tactile surfaces, and deep connection to earth.',
    prompt: 'Transform this space with a focus on Materiality & Nature. Use rich, tactile materials like raw clay, rough-hewn wood, textured stone, and wool. Emphasize the natural imperfections and deep earthy tones.',
    thumbnail: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'maximalism',
    name: 'Maximalism',
    category: 'Culture',
    description: 'Bold patterns, vibrant colors, and curated excess.',
    prompt: 'Redesign this in a Maximalist style. Use bold mixed patterns, vibrant saturated colors, eclectic art collections, and layers of texture. More is more.',
    thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'mexican-hacienda',
    name: 'Mexican Hacienda',
    category: 'Culture',
    description: 'Bold colors, talavera tiles, and heavy timber.',
    prompt: 'Reimagine this space as a Mexican Hacienda. Use hand-painted Talavera tiles, deep terracotta floors, heavy dark timber beams, and bold vibrant accent walls.',
    thumbnail: 'https://images.unsplash.com/photo-1600466892203-d84aae0aa4c1?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'mid-century',
    name: 'Mid-Century Modern',
    category: 'Culture',
    description: 'Organic shapes, tapered legs, and 1950s optimism.',
    prompt: 'Redesign this in Mid-Century Modern style. Use iconic furniture with tapered legs, a palette of mustard yellow and teal, organic shapes, and walnut wood finishes.',
    thumbnail: 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'modern-coastal',
    name: 'Modern Coastal',
    category: 'Culture',
    description: 'Relaxed, breezy, and sophisticated seaside living.',
    prompt: 'Redesign this in Modern Coastal style. Use a crisp white backdrop, light wood floors, linen upholstery, subtle ocean blue accents, and natural textures like rattan and jute. Aim for a breezy, Hamptons-inspired look.',
    thumbnail: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'modern-industrial',
    name: 'Modern Industrial',
    category: 'Culture',
    description: 'Refined warehouse aesthetic with polished finishes.',
    prompt: 'Redesign this as Modern Industrial. Use polished concrete floors, matte black metal accents, refined exposed brick, and sleek leather furniture. Keep it cleaner than traditional industrial.',
    thumbnail: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'moroccan',
    name: 'Moroccan',
    category: 'Culture',
    description: 'Vibrant colors, geometric tiles, and intricate lanterns.',
    prompt: 'Transform this space into a Moroccan oasis. Use vibrant zellige tiles, arched doorways, intricate brass lanterns, plush floor cushions, and warm sunset hues.',
    thumbnail: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'futuristic-cyberpunk',
    name: 'Neo-Futurism',
    category: 'Culture',
    description: 'Neon accents, sleek surfaces, and high-tech vibes.',
    prompt: 'Transform this building into a Neo-Futuristic masterpiece. Use glowing neon strips, polished chrome surfaces, holographic elements, and sharp geometric angles.',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'new-england',
    name: 'New England',
    category: 'Culture',
    description: 'Classic colonial architecture, nautical touches, and cozy refinement.',
    prompt: 'Redesign this in a New England style. Use a palette of crisp whites, creams, and navy blues. Incorporate traditional wood furniture, wainscoting, nautical accents, and comfortable, layered textiles. For exteriors, use clapboard siding and steep roofs.',
    thumbnail: 'https://images.unsplash.com/photo-1596716587659-a922cc68513f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'modern-mediterranean',
    name: 'New Mediterranean',
    category: 'Culture',
    description: 'A modern, minimalist take on traditional Mediterranean warmth.',
    prompt: 'Redesign this in New Mediterranean style. Use warm white plaster walls, arches, limestone floors, terracotta accents, and rustic wood beams. Keep the aesthetic minimal, earthy, and sun-drenched.',
    thumbnail: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'organic-modern',
    name: 'Organic Modern',
    category: 'Culture',
    description: 'Modern sleekness balanced with natural forms and raw materials.',
    prompt: 'Redesign this in Organic Modern style. Combine modern clean lines with natural shapes. Use raw stone, reclaimed wood, neutral textiles, and furniture with organic curves.',
    thumbnail: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'persian',
    name: 'Persian',
    category: 'Culture',
    description: 'Intricate tilework, pointed arches, and ornate grandeur.',
    prompt: 'Redesign this space in Persian style. Use detailed geometric mosaic tiles in turquoise and cobalt blue, pointed arches, intricate muqarnas, and rich Persian carpets.',
    thumbnail: 'https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'quiet-luxury',
    name: 'Quiet Luxury',
    category: 'Culture',
    description: 'Understated elegance with premium materials and muted tones.',
    prompt: 'Transform this space into a Quiet Luxury aesthetic. Use a sophisticated monochromatic palette, high-end natural materials like marble, silk, and oak, timeless furniture forms, and refined architectural details. Focus on quality and subtle sophistication.',
    thumbnail: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'russian-imperial',
    name: 'Russian Imperial',
    category: 'Culture',
    description: 'Ornate gold leaf, baroque details, and grand elegance.',
    prompt: 'Transform this space into Russian Imperial style. Use rich gold leaf accents, ornate baroque moldings, velvet upholstery, grand chandeliers, and classical oil painting aesthetics.',
    thumbnail: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'rustic-farmhouse',
    name: 'Rustic Farmhouse',
    category: 'Culture',
    description: 'Weathered wood, neutral palettes, and cozy comfort.',
    prompt: 'Reimagine this space as a Modern Rustic Farmhouse. Use shiplap walls, sliding barn doors, neutral linens, weathered wood accents, and black hardware.',
    thumbnail: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'scandinavian',
    name: 'Scandinavian',
    category: 'Culture',
    description: 'Bright, functional, and cozy hygge minimalism.',
    prompt: 'Transform this room into a Scandinavian design. Use light colors, natural textures, clean lines, and functional minimalist furniture with a cozy hygge feel.',
    thumbnail: 'https://images.unsplash.com/photo-1723748972084-4124765e0a55?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'soft-brutalism',
    name: 'Soft Brutalism',
    category: 'Culture',
    description: 'Raw concrete forms softened by light and vegetation.',
    prompt: 'Transform this using Soft Brutalism (Neo-Brutalism). Use raw concrete and geometric volumes as the primary elements, but soften the look with curved edges, warm lighting, and abundant indoor plants.',
    thumbnail: 'https://images.unsplash.com/photo-1750437917600-6536b26fe87d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'swedish-farmhouse',
    name: 'Swedish Farmhouse',
    category: 'Culture',
    description: 'Simple functionality, light woods, and Gustavian influences.',
    prompt: 'Redesign this as a Swedish Farmhouse. Use painted floorboards, Gustavian furniture styles, gingham checks, a pale blue and white palette, and simple uncluttered arrangements.',
    thumbnail: 'https://images.unsplash.com/photo-1748043176720-5675795b71e3?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'traditional-italian',
    name: 'Traditional Italian',
    category: 'Culture',
    description: 'Warm colors, rustic stone, and timeless elegance.',
    prompt: 'Transform this room into a Traditional Italian space. Use terracotta floors, exposed beams, warm ochre and sienna plaster walls, and elegant antique furniture.',
    thumbnail: 'https://images.unsplash.com/photo-1697536197373-e184e91bf9e3?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'transitional',
    name: 'Transitional',
    category: 'Culture',
    description: 'A harmonious blend of traditional elegance and modern lines.',
    prompt: 'Redesign this in Transitional style. Blend traditional elegance with modern lines. Use a cohesive neutral palette, comfortable upholstery, balanced textures, and classic silhouettes updated for today.',
    thumbnail: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'tropical-bali',
    name: 'Tropical Bali',
    category: 'Culture',
    description: 'Bamboo, indoor-outdoor flow, and exotic greenery.',
    prompt: 'Transform this space into a Bali-inspired tropical retreat. Use bamboo structures, stone textures, wide open spaces to let in light, and dense tropical foliage.',
    thumbnail: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'victorian',
    name: 'Victorian',
    category: 'Culture',
    description: 'High ceilings, dark woods, and ornate period patterns.',
    prompt: 'Transform this into a Victorian period design. Use tall ceilings with crown molding, dark wood wainscoting, ornate floral wallpaper, and velvet drapery.',
    thumbnail: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'warm-minimalism',
    name: 'Warm Minimalism',
    category: 'Culture',
    description: 'Clean lines with cozy textures and earthy neutrals.',
    prompt: 'Transform this room into a Warm Minimalist space. Use a monochromatic palette of creams and beiges, soft textured fabrics (bouclé, linen), curved edges, and warm ambient lighting.',
    thumbnail: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400'
  }
];
