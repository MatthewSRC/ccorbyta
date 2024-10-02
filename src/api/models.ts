import { z } from 'zod';

const beerResponseSchema = z.object({
  id: z.string(),
  brand: z.string(),
  name: z.string(),
  style: z.string(),
  hop: z.string(),
  yeast: z.string(),
  malts: z.string(),
  ibu: z.string(),
  alcohol: z.string(),
  blg: z.string(),
});

export type BeerResponse = z.infer<typeof beerResponseSchema>;

const beersResponseSchema = z.array(beerResponseSchema);

export type BeersResponse = z.infer<typeof beersResponseSchema>;
