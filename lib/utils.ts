import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**
 * Splits an array into chunks of a specified size.
 * @param array The array to chunk.
 * @param size The size of each chunk.
 * @returns An array of arrays (chunks).
 */
export function chunkArray<T>(array: T[], size: number): T[][] {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunkArray(tail, size)];
}