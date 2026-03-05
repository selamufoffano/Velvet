export const MusicNoteIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 text-[#a8a8a8] mx-auto"
  >
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
  </svg>
);

export const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-[#a8a8a8] mx-auto"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export const HeartIcon = ({ filled }) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-4 h-4 mx-auto ${filled ? "text-[#8a2be2] border-none" : "text-[#a8a8a8]"}`}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

export const StarIcon = ({ filled }) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-3.5 h-3.5 ${filled ? "text-[#eab308]" : "text-gray-600"}`}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

// SEZIONE VOLUME
export const VolumeMuteIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-5 0 24 14"
    fill="currentColor"
    className={className || "w-5 h-5"}
  >
    <path d="M 9.1368946,2.8682631e-4 A 0.75,0.75 0 0 0 8.7410536,0.10053914 L 1.8158947,4.1008117 A 3.64,3.64 0 0 0 0.48574338,9.0674336 3.64,3.64 0 0 0 1.8158947,10.399652 l 6.9251589,3.999755 a 0.75,0.75 0 0 0 1.124996,-0.649056 V 11.844525 A 4.7,4.7 0 0 1 8.3658826,11.15051 v 1.300179 L 2.5667533,9.1025734 A 2.14,2.14 0 0 1 1.7859224,6.1828551 C 1.9729222,5.8588555 2.2422368,5.5884738 2.5662365,5.400474 L 8.3658826,2.0508076 V 3.3504699 C 8.8158816,3.0374702 9.3220496,2.8004553 9.8660496,2.6564554 V 0.75062864 A 0.75,0.75 0 0 0 9.1368946,2.8682631e-4 Z M 13.521641,4.7529683 A 0.75,0.75 0 0 0 13.044667,4.9710428 L 11.574473,6.4412373 10.104795,4.9710428 A 0.75,0.75 0 0 0 9.0459446,6.0309264 L 10.514589,7.5011209 9.0449106,8.9713154 a 0.75,0.75 0 1 0 1.0598844,1.0598836 l 1.469678,-1.4701944 1.470194,1.4701944 A 0.75,0.75 0 0 0 14.104551,8.9713154 L 12.635907,7.5011209 14.105584,6.0309264 a 0.75,0.75 0 0 0 0,-1.0598836 0.75,0.75 0 0 0 -0.583943,-0.2180745 z" />
  </svg>
);

export const VolumeHalfIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-5 0 24 14"
    fill="currentColor"
    className={className || "w-5 h-5"}
  >
    <path d="M 9.037383,0.00417723 A 0.75,0.75 0 0 0 8.74076,0.10029533 L 1.8161179,4.1000512 A 3.64,3.64 0 0 0 0.48596661,5.4322696 3.64,3.64 0 0 0 1.8161179,10.399408 L 8.74076,14.399164 a 0.75,0.75 0 0 0 1.124996,-0.65009 V 0.74935133 A 0.75,0.75 0 0 0 9.491102,0.09926183 v 0.00103 A 0.75,0.75 0 0 0 9.037383,0.00417723 Z M 8.366622,2.0495304 V 12.449412 L 2.5669765,9.0992293 a 2.14,2.14 0 0 1 0,-3.7000326 z m 2.883029,0.9627319 v 1.6500285 a 3,3 0 0 1 0,5.1748775 v 1.6489947 a 4.502,4.502 0 0 0 0,-8.4739007 z" />
  </svg>
);

export const VolumeFullIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-5 0 24 14"
    fill="currentColor"
    className={className || "w-5 h-5"}
  >
    <path d="M 9.0372887,0.00405467 A 0.75,0.75 0 0 0 8.740666,0.10068957 L 1.8155072,4.1004455 A 3.64,3.64 0 0 0 0.48587263,5.4326639 3.64,3.64 0 0 0 1.8155072,10.399286 L 8.740666,14.399558 A 0.75,0.75 0 0 0 9.8656619,13.749469 V 0.74922887 A 0.75,0.75 0 0 0 9.490491,0.09965607 v 0.00103 A 0.75,0.75 0 0 0 9.0372887,0.00405107 Z M 14.089177,1.6618346 v 1.550293 a 4.252,4.252 0 0 1 0,8.1266354 v 1.551327 a 5.752,5.752 0 0 0 0,-11.2282554 z M 8.3665286,2.0494079 V 12.44929 L 2.5668826,9.0996235 a 2.14,2.14 0 0 1 0,-3.7000325 z m 2.8830284,0.9632487 v 1.6500285 a 3,3 0 0 1 0,5.1748779 v 1.648995 a 4.502,4.502 0 0 0 0,-8.4739014 z" />
  </svg>
);

// SEZIONE TESTO ...

export const LyricsIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className || "block w-5 h-5"}
  >
    <path d="m 12,19 v 3" />
    <path d="m 19,10 v 2 A 7,7 0 0 1 5,12 v -2" />
    <rect x="9" y="2" width="6" height="13" rx="3" />
  </svg>
);

export const CodaIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className || "block w-5 h-5"}
  >
    <path d="M 3,5 H 9" />
    <path d="M 3,12 H 16" />
    <path d="M 3,19 H 16" />
    <path d="M 16,8 13,5 16,2" />
    <path d="M 21,19 V 7 A 2,2 0 0 0 19,5 h -6" />
  </svg>
);

export const ScreenFullInIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className || "block w-5 h-5"}
  >
    <path d="M 8,3 H 5 A 2,2 0 0 0 3,5 v 3" />
    <path d="M 21,8 V 5 A 2,2 0 0 0 19,3 h -3" />
    <path d="m 3,16 v 3 a 2,2 0 0 0 2,2 h 3" />
    <path d="m 16,21 h 3 a 2,2 0 0 0 2,-2 v -3" />
  </svg>
);

export const ScreenFullOutIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-15 -3 24 14"
    fill="currentColor"
    className={className || "w-5 h-5"}
  >
    <path d="M 8,3 V 6 A 2,2 0 0 1 6,8 H 3" />
    <path d="M 21,8 H 18 A 2,2 0 0 1 16,6 V 3" />
    <path d="m 3,16 h 3 a 2,2 0 0 1 2,2 v 3" />
    <path d="m 16,21 v -3 a 2,2 0 0 1 2,-2 h 3" />
    <rect x="7" y="8" width="10" height="8" rx="1" />{" "}
  </svg>
);

// SEZIONE BUTTON CONTROLS

export const PrevIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className || "block w-6 h-6"}
  >
    <path d="M 3,19 V 5" />
    <path d="M 7,12 H 21" />
    <path d="m 13,6 -6,6 6,6" />
  </svg>
);

export const NextIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className || "block w-6 h-6"}
  >
    <path d="M3 12H17" />
    <path d="M11 6L17 12L11 18" />
    <path d="M21 5V19" />
  </svg>
);

export const PlayIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    stroke=""
    strokeWidth=""
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className || "block w-5 h-5"}
  >
    <path d="M 5,5 A 2,2 0 0 1 8.008,3.272 l 11.997,6.998 a 2,2 0 0 1 0.003,3.458 l -12,7 A 2,2 0 0 1 5,19 Z" />
  </svg>
);

export const PauseIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className || "block w-5 h-5"}
  >
    <path d="M3 2h4v16H3V2zm10 0h4v16h-4V2z" />
  </svg>
);

export const ShuffleIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className || "block w-5 h-5"}
  >
    <path d="m 18,14 4,4 -4,4" />
    <path d="m 18,2 4,4 -4,4" />
    <path d="m 2,18 h 1.973 a 4,4 0 0 0 3.3,-1.7 L 12.727,7.7 A 4,4 0 0 1 16.027,6 H 22" />
    <path d="m 2,6 h 1.972 a 4,4 0 0 1 3.6,2.2" />
    <path d="m 22,18 h -6.041 a 4,4 0 0 1 -3.3,-1.8 L 12.3,15.75" />
  </svg>
);

export const RepeatIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className || "block w-5 h-5"}
  >
    <path d="m 17,2 4,4 -4,4" />
    <path d="M 3,11 V 10 A 4,4 0 0 1 7,6 h 14" />
    <path d="M 7,22 3,18 7,14" />
    <path d="m 21,13 v 1 a 4,4 0 0 1 -4,4 H 3" />
  </svg>
);

export const RefreshIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className || "block w-4 h-4"}
  >
    <path d="M 21,12 A 9,9 0 0 0 12,3 9.75,9.75 0 0 0 5.26,5.74 L 3,8" />
    <path d="M 3,3 V 8 H 8" />
    <path d="m 3,12 a 9,9 0 0 0 9,9 9.75,9.75 0 0 0 6.74,-2.74 L 21,16" />
    <path d="m 16,16 h 5 v 5" />
  </svg>
);

export const CloseLyricsIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className || "block w-10 h-10"}
  >
    <path d="m 9,6 -6,6 6,6" />
    <path d="M 3,12 H 17" />
    <path d="M 21,19 V 5" />
  </svg>
);

export const CloseLyricsIcon2 = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className || "block w-10 h-10"}
  >
    <path d="M 18,6 6,18" />
    <path d="M 6,6 18,18" />
  </svg>
);
