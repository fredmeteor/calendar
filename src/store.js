import { seedData } from './seed.js';

export const store = {
  state: {
    data: reactive(seedData) 
  }
}