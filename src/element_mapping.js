import { translateLocale, memoizedLocale } from "./utils/util";
import {
  SKIP_INTRO,
  SKIP_RECAP,
  NEXT_EPISODE,
  SKIP_ADS,
  NETFLIX,
  PRIME,
  CANAL,
} from "./utils/i18n";

const locale = memoizedLocale("locale");

export const elementMapping = [
  {
    type: NETFLIX,
    selector: "[data-uia='player-skip-intro']",
    locale,
  },
  {
    type: NETFLIX,
    selector: ".skip-credits > a",
    locale,
  },
  {
    type: NETFLIX,
    selector: "[aria-label='Skip Recap']",
    locale,
  },
  {
    type: NETFLIX,
    selector: "[aria-label='Continue Playing']",
    locale,
  },
  {
    type: NETFLIX,
    selector: ".interrupter-actions > .nf-icon-button:first-child",
    locale,
  },
  {
    type: CANAL,
    selector: "[data-testid='skipPreviouslyPopinPressed']",
    locale,
  },
  {
    type: CANAL,
    selector: "[data-testid='skipGenericPopinPressed']",
    locale,
  },
  {
    type: PRIME,
    selector: ".skipElement",
    locale,
  },
  {
    type: PRIME,
    selector: ".adSkipButton",
    locale,
    extraWait: true,
  },
  {
    type: PRIME,
    selector: ".nextUpCard",
    locale,
  },
  {
    type: PRIME,
    skipEvent: SKIP_INTRO,
    selector: `//*[text()="${translateLocale(SKIP_INTRO).translatedText}"]`,
    xpath: true,
    ...translateLocale(SKIP_INTRO),
  },
  {
    type: PRIME,
    skipEvent: SKIP_RECAP,
    selector: `//*[text()="${translateLocale(SKIP_RECAP).translatedText}"]`,
    xpath: true,
    ...translateLocale(SKIP_RECAP),
  },
  {
    type: PRIME,
    skipEvent: SKIP_ADS,
    selector: `//*[text()="${translateLocale(SKIP_ADS).translatedText}"]`,
    xpath: true,
    ...translateLocale(SKIP_ADS),
    extraWait: true,
  },
  {
    type: PRIME,
    skipEvent: NEXT_EPISODE,
    selector: `//*[text()="${
      translateLocale(NEXT_EPISODE).translatedText
    }"]/parent::div/following-sibling::div`,
    extraWait: true,
    xpath: true,
    ...translateLocale(NEXT_EPISODE),
  },
];
