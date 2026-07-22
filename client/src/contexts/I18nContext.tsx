/**
 * I18nContext — Lightweight ES/EN translation provider for Nutermia.
 * - Stores preferred language in localStorage ("nut-lang").
 * - Exposes `t(key)` returning a string OR a React node when the dictionary
 *   contains JSX (e.g. headlines with <em> emphasis).
 * - Defaults to Spanish (primary language per spec).
 *
 * Style guard: keep keys flat and namespaced (e.g. "home.hero.title").
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, type Lang, type Dict } from "@/i18n/dictionaries";

interface I18nValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: (key: keyof Dict) => Dict[keyof Dict];
  /** Pure-string accessor, falls back to key when value is a node. */
  s: (key: keyof Dict) => string;
}

const I18nContext = createContext<I18nValue | null>(null);
const STORAGE_KEY = "nut-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "es";
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "en" || saved === "es" ? saved : "es";
  });

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l;
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = useCallback(
    () => setLang(lang === "es" ? "en" : "es"),
    [lang, setLang]
  );

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const dict = dictionaries[lang];

  const t = useCallback(
    (key: keyof Dict) =>
      dict[key] ?? dictionaries.es[key] ?? (key as unknown as string),
    [dict]
  );
  const s = useCallback(
    (key: keyof Dict) => {
      const v = dict[key] ?? dictionaries.es[key];
      return typeof v === "string" ? v : String(key);
    },
    [dict]
  );

  const value = useMemo(
    () => ({ lang, setLang, toggle, t, s }),
    [lang, setLang, toggle, t, s]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
