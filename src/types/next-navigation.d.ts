declare module 'next/navigation' {
  // Minimal declarations to satisfy TypeScript during build.
  export function useRouter(...args: any[]): any;
  export function usePathname(...args: any[]): string | null;
  export function useSearchParams(...args: any[]): URLSearchParams | null;
  export function useParams(...args: any[]): Record<string, any> | null;
  export function useSelectedLayoutSegment(...args: any[]): any;
  export function useSelectedLayoutSegments(...args: any[]): any[];
  export function useServerInsertedHTML(callback: () => any): void;
  export const router: any;
}
