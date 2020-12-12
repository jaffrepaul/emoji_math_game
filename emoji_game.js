// const { smilyAndPeople, animalsAndNature, foodAndDrink, travelAndPlaces } = require("./emojiArr");
// import { smilyAndPeople, animalsAndNature, foodAndDrink, travelAndPlaces } from "./emoji_arr.js";

// [x] Make giant array of emojis
// [x] Make func to randomly select any 3 or the emoji
// [x] Make func to return sum of two nums, If sum is correct, trigger random emoji pull or error message if incorrect
// [x] Make UI to accept 2 nums & result  as input & button to submit. Nums get passed to sum func. Submit runs func. 

const smilyAndPeople = [
    '😀',
    '😃',
    '😄',
    '😁',
    '😆',
    '😅',
    '😂',
    '🤣',
    '😊',
    '😇',
    '🙂',
    '🙃',
    '😉',
    '😌',
    '😍',
    '😘',
    '😗',
    '😙',
    '😚',
    '😋',
    '😜',
    '😝',
    '😛',
    '🤑',
    '🤗',
    '🤓',
    '😎',
    '🤡',
    '🤠',
    '😏',
    '😒',
    '😞',
    '😔',
    '😟',
    '😕',
    '🙁',
    '😣',
    '😖',
    '😫',
    '😩',
    '😤',
    '😠',
    '😡',
    '😶',
    '😐',
    '😑',
    '😯',
    '😦',
    '😧',
    '😮',
    '😲',
    '😵',
    '😳',
    '😱',
    '😨',
    '😰',
    '😢',
    '😥',
    '🤤',
    '😭',
    '😓',
    '😪',
    '😴',
    '🙄',
    '🤔',
    '🤥',
    '😬',
    '🤐',
    '🤢',
    '🤧',
    '😷',
    '🤒',
    '🤕',
    '😈',
    '👿',
    '👹',
    '👺',
    '💩',
    '👻',
    '💀',
    '☠️',
    '👽',
    '👾',
    '🤖',
    '🎃',
    '😺',
    '😸',
    '😹',
    '😻',
    '😼',
    '😽',
    '🙀',
    '😿',
    '😾',
    '👐',
    '🙌',
    '👏',
    '🙏',
    '🤝',
    '👍',
    '👎',
    '👊',
    '✊',
    '🤛',
    '🤜',
    '🤞',
    '✌️',
    '🤘',
    '👌',
    '👈',
    '👉',
    '👆',
    '👇',
    '✋',
    '🤚',
    '🖐',
    '🖖',
    '👋',
    '🤙',
    '💪',
    '🤳',
    '💅',
    '💍',
    '💄',
    '💋',
    '👄',
    '👅',
    '👂',
    '👃',
    '👣',
    '👁',
    '👀',
    '🧠',
    '🗣',
    '👤',
    '👥',
    '👶',
    '👦',
    '👧',
    '👨',
    '👩',
    '👱‍♀',
    '👱',
    '👴',
    '👵',
    '👲',
    '👳‍♀',
    '👳',
    '👮‍♀',
    '👮',
    '👷‍♀',
    '👷',
    '💂‍♀',
    '💂',
    '🕵️‍♀️',
    '🕵',
    '👩‍⚕',
    '👨‍⚕',
    '👩‍🌾',
    '👨‍🌾',
    '👩‍🍳',
    '👨‍🍳',
    '👩‍🎓',
    '👨‍🎓',
    '👩‍🎤',
    '👨‍🎤',
    '👩‍🏫',
    '👨‍🏫',
    '👩‍🏭',
    '👨‍🏭',
    '👩‍💻',
    '👨‍💻',
    '👩‍💼',
    '👨‍💼',
    '👩‍🔧',
    '👨‍🔧',
    '👩‍🔬',
    '👨‍🔬',
    '👩‍🎨',
    '👨‍🎨',
    '👩‍🚒',
    '👨‍🚒',
    '👩‍✈',
    '👨‍✈',
    '👩‍🚀',
    '👨‍🚀',
    '👩‍⚖',
    '👨‍⚖',
    '🤶',
    '🎅',
    '👸',
    '🤴',
    '👰',
    '🤵',
    '👼',
    '🤰',
    '🙇‍♀',
    '🙇',
    '💁',
    '💁‍♂',
    '🙅',
    '🙅‍♂',
    '🙆',
    '🙆‍♂',
    '🙋',
    '🙋‍♂',
    '🤦‍♀',
    '🤦‍♂',
    '🤷‍♀',
    '🤷‍♂',
    '🙎',
    '🙎‍♂',
    '🙍',
    '🙍‍♂',
    '💇',
    '💇‍♂',
    '💆',
    '💆‍♂',
    '🕴',
    '💃',
    '🕺',
    '👯',
    '👯‍♂',
    '🚶‍♀',
    '🚶',
    '🏃‍♀',
    '🏃',
    '👫',
    '👭',
    '👬',
    '💑',
    '👩‍❤️‍👩',
    '👨‍❤️‍👨',
    '💏',
    '👩‍❤️‍💋‍👩',
    '👨‍❤️‍💋‍👨',
    '👪',
    '👨‍👩‍👧',
    '👨‍👩‍👧‍👦',
    '👨‍👩‍👦‍👦',
    '👨‍👩‍👧‍👧',
    '👩‍👩‍👦',
    '👩‍👩‍👧',
    '👩‍👩‍👧‍👦',
    '👩‍👩‍👦‍👦',
    '👩‍👩‍👧‍👧',
    '👨‍👨‍👦',
    '👨‍👨‍👧',
    '👨‍👨‍👧‍👦',
    '👨‍👨‍👦‍👦',
    '👨‍👨‍👧‍👧',
    '👩‍👦',
    '👩‍👧',
    '👩‍👧‍👦',
    '👩‍👦‍👦',
    '👩‍👧‍👧',
    '👨‍👦',
    '👨‍👧',
    '👨‍👧‍👦',
    '👨‍👦‍👦',
    '👨‍👧‍👧',
    '👚',
    '👕',
    '👖',
    '👔',
    '👗',
    '👙',
    '👘',
    '👠',
    '👡',
    '👢',
    '👞',
    '👟',
    '🧣',
    '🧤',
    '🧥',
    '🧦',
    '🧢',
    '👒',
    '🎩',
    '🎓',
    '👑',
    '⛑',
    '🎒',
    '👝',
    '👛',
    '👜',
    '💼',
    '👓',
    '🕶',
    '🌂',
    '☂️',
];

const animalsAndNature = [
    '🐶',
    '🐱',
    '🐭',
    '🐹',
    '🐰',
    '🦊',
    '🐻',
    '🐼',
    '🐨',
    '🐯',
    '🦁',
    '🐮',
    '🐷',
    '🐽',
    '🐸',
    '🐵',
    '🙈',
    '🙉',
    '🙊',
    '🐒',
    '🐔',
    '🐧',
    '🐦',
    '🐤',
    '🐣',
    '🐥',
    '🦆',
    '🦅',
    '🦉',
    '🦇',
    '🐺',
    '🐗',
    '🐴',
    '🦄',
    '🐝',
    '🐛',
    '🦋',
    '🐌',
    '🐚',
    '🐞',
    '🐜',
    '🕷',
    '🕸',
    '🐢',
    '🐍',
    '🦎',
    '🦂',
    '🦀',
    '🦑',
    '🐙',
    '🦐',
    '🐠',
    '🐟',
    '🐡',
    '🐬',
    '🦈',
    '🐳',
    '🐋',
    '🐊',
    '🐆',
    '🐅',
    '🐃',
    '🐂',
    '🐄',
    '🦌',
    '🐪',
    '🐫',
    '🐘',
    '🦏',
    '🦍',
    '🐎',
    '🐖',
    '🐐',
    '🐏',
    '🐑',
    '🐕',
    '🐩',
    '🐈',
    '🐓',
    '🦃',
    '🕊',
    '🐇',
    '🐁',
    '🐀',
    '🐿',
    '🐾',
    '🐉',
    '🐲',
    '🌵',
    '🎄',
    '🌲',
    '🌳',
    '🌴',
    '🌱',
    '🌿',
    '☘️',
    '🍀',
    '🎍',
    '🎋',
    '🍃',
    '🍂',
    '🍁',
    '🍄',
    '🌾',
    '💐',
    '🌷',
    '🌹',
    '🥀',
    '🌻',
    '🌼',
    '🌸',
    '🌺',
    '🌎',
    '🌍',
    '🌏',
    '🌕',
    '🌖',
    '🌗',
    '🌘',
    '🌑',
    '🌒',
    '🌓',
    '🌔',
    '🌚',
    '🌝',
    '🌞',
    '🌛',
    '🌜',
    '🌙',
    '💫',
    '⭐️',
    '🌟',
    '✨',
    '⚡️',
    '🔥',
    '💥',
    '☄',
    '☀️',
    '🌤',
    '⛅️',
    '🌥',
    '🌦',
    '🌈',
    '☁️',
    '🌧',
    '⛈',
    '🌩',
    '🌨',
    '☃️',
    '⛄️',
    '❄️',
    '🌬',
    '💨',
    '🌪',
    '🌫',
    '🌊',
    '💧',
    '💦',
    '☔️',
    '🦓',
    '🦒',
    '🦔',
    '🦕',
    '🦖',
];

const foodAndDrink = [
    '🍏',
    '🍎',
    '🍐',
    '🍊',
    '🍋',
    '🍌',
    '🍉',
    '🍇',
    '🍓',
    '🍈',
    '🍒',
    '🍑',
    '🍍',
    '🥝',
    '🥑',
    '🍅',
    '🍆',
    '🥒',
    '🥕',
    '🌽',
    '🌶',
    '🥔',
    '🍠',
    '🌰',
    '🥜',
    '🍯',
    '🥐',
    '🍞',
    '🥖',
    '🧀',
    '🥚',
    '🍳',
    '🥓',
    '🥞',
    '🍤',
    '🍗',
    '🍖',
    '🍕',
    '🌭',
    '🍔',
    '🍟',
    '🥙',
    '🌮',
    '🌯',
    '🥗',
    '🥘',
    '🍝',
    '🍜',
    '🍲',
    '🍥',
    '🍣',
    '🍱',
    '🍛',
    '🍚',
    '🍙',
    '🍘',
    '🍢',
    '🍡',
    '🍧',
    '🍨',
    '🍦',
    '🍰',
    '🎂',
    '🍮',
    '🍭',
    '🍬',
    '🍫',
    '🍿',
    '🍩',
    '🍪',
    '🥛',
    '🍼',
    '☕️',
    '🍵',
    '🍶',
    '🍺',
    '🍻',
    '🥂',
    '🍷',
    '🥃',
    '🍸',
    '🍹',
    '🍾',
    '🥄',
    '🍴',
    '🍽',
    '🥥',
    '🥦',
    '🥨',
    '🥩',
    '🥪',
    '🥣',
    '🥫',
    '🥟',
    '🥠',
    '🥡',
    '🥧',
    '🥤',
    '🥢',
];

const objects = [
    '📁',
    '📂',
    '⌚',
    '📱',
    '📲',
    '💻',
    '⌨️',
    '🖥',
    '🖨',
    '🖱',
    '🖲',
    '🕹',
    '🗜',
    '💽',
    '💾',
    '💿',
    '📀',
    '📼',
    '📷',
    '📸',
    '📹',
    '🎥',
    '📽',
    '🎞',
    '📞',
    '☎️',
    '📟',
    '📠',
    '📺',
    '📻',
    '🎙',
    '🎚',
    '🎛',
    '⏱',
    '⏲',
    '⏰',
    '🕰',
    '⌛️',
    '⏳',
    '📡',
    '🔋',
    '🔌',
    '💡',
    '🔦',
    '🕯',
    '🗑',
    '🛢',
    '💸',
    '💵',
    '💴',
    '💶',
    '💷',
    '💰',
    '💳',
    '💎',
    '⚖️',
    '🔧',
    '🔨',
    '⚒',
    '🛠',
    '⛏',
    '🔩',
    '⚙️',
    '⛓',
    '🔫',
    '💣',
    '🔪',
    '🗡',
    '⚔️',
    '🛡',
    '🚬',
    '⚰️',
    '⚱️',
    '🏺',
    '🔮',
    '📿',
    '💈',
    '⚗️',
    '🔭',
    '🔬',
    '🕳',
    '💊',
    '💉',
    '🌡',
    '🚽',
    '🚰',
    '🚿',
    '🛁',
    '🛀',
    '🛎',
    '🔑',
    '🗝',
    '🚪',
    '🛋',
    '🛏',
    '🛌',
    '🖼',
    '🛍',
    '🛒',
    '🎁',
    '🎈',
    '🎏',
    '🎀',
    '🎊',
    '🎉',
    '🎎',
    '🏮',
    '🎐',
    '✉️',
    '📩',
    '📨',
    '📧',
    '💌',
    '📥',
    '📤',
    '📦',
    '🏷',
    '📪',
    '📫',
    '📬',
    '📭',
    '📮',
    '📯',
    '📜',
    '📃',
    '📄',
    '📑',
    '📊',
    '📈',
    '📉',
    '🗒',
    '🗓',
    '📆',
    '📅',
    '📇',
    '🗃',
    '🗳',
    '🗄',
    '📋',
    '📁',
    '📂',
    '🗂',
    '🗞',
    '📰',
    '📓',
    '📔',
    '📒',
    '📕',
    '📗',
    '📘',
    '📙',
    '📚',
    '📖',
    '🔖',
    '🔗',
    '📎',
    '🖇',
    '📐',
    '📏',
    '📌',
    '📍',
    '✂️',
    '🖊',
    '🖋',
    '✒️',
    '🖌',
    '🖍',
    '📝',
    '✏️',
    '🔍',
    '🔎',
    '🔏',
    '🔐',
    '🔒',
    '🔓',
];

const flags = [
    '🏳️',
    '🏴',
    '🏁',
    '🚩',
    '🏳️‍🌈',
    '🇦🇫',
    '🇦🇽',
    '🇦🇱',
    '🇩🇿',
    '🇦🇸',
    '🇦🇩',
    '🇦🇴',
    '🇦🇮',
    '🇦🇶',
    '🇦🇬',
    '🇦🇷',
    '🇦🇲',
    '🇦🇼',
    '🇦🇺',
    '🇦🇹',
    '🇦🇿',
    '🇧🇸',
    '🇧🇭',
    '🇧🇩',
    '🇧🇧',
    '🇧🇾',
    '🇧🇪',
    '🇧🇿',
    '🇧🇯',
    '🇧🇲',
    '🇧🇹',
    '🇧🇴',
    '🇧🇶',
    '🇧🇦',
    '🇧🇼',
    '🇧🇷',
    '🇮🇴',
    '🇻🇬',
    '🇧🇳',
    '🇧🇬',
    '🇧🇫',
    '🇧🇮',
    '🇨🇻',
    '🇰🇭',
    '🇨🇲',
    '🇨🇦',
    '🇮🇨',
    '🇰🇾',
    '🇨🇫',
    '🇹🇩',
    '🇨🇱',
    '🇨🇳',
    '🇨🇽',
    '🇨🇨',
    '🇨🇴',
    '🇰🇲',
    '🇨🇬',
    '🇨🇩',
    '🇨🇰',
    '🇨🇷',
    '🇨🇮',
    '🇭🇷',
    '🇨🇺',
    '🇨🇼',
    '🇨🇾',
    '🇨🇿',
    '🇩🇰',
    '🇩🇯',
    '🇩🇲',
    '🇩🇴',
    '🇪🇨',
    '🇪🇬',
    '🇸🇻',
    '🇬🇶',
    '🇪🇷',
    '🇪🇪',
    '🇪🇹',
    '🇪🇺',
    '🇫🇰',
    '🇫🇴',
    '🇫🇯',
    '🇫🇮',
    '🇫🇷',
    '🇬🇫',
    '🇵🇫',
    '🇹🇫',
    '🇬🇦',
    '🇬🇲',
    '🇬🇪',
    '🇩🇪',
    '🇬🇭',
    '🇬🇮',
    '🇬🇷',
    '🇬🇱',
    '🇬🇩',
    '🇬🇵',
    '🇬🇺',
    '🇬🇹',
    '🇬🇬',
    '🇬🇳',
    '🇬🇼',
    '🇬🇾',
    '🇭🇹',
    '🇭🇳',
    '🇭🇰',
    '🇭🇺',
    '🇮🇸',
    '🇮🇳',
    '🇮🇩',
    '🇮🇷',
    '🇮🇶',
    '🇮🇪',
    '🇮🇲',
    '🇮🇹',
    '🇯🇲',
    '🇯🇵',
    '🎌',
    '🇯🇪',
    '🇯🇴',
    '🇰🇿',
    '🇰🇪',
    '🇰🇮',
    '🇽🇰',
    '🇰🇼',
    '🇰🇬',
    '🇱🇦',
    '🇱🇻',
    '🇱🇧',
    '🇱🇸',
    '🇱🇷',
    '🇱🇾',
    '🇱🇮',
    '🇱🇹',
    '🇱🇺',
    '🇲🇴',
    '🇲🇰',
    '🇲🇬',
    '🇲🇼',
    '🇲🇾',
    '🇲🇻',
    '🇲🇱',
    '🇲🇹',
    '🇲🇭',
    '🇲🇶',
    '🇲🇷',
    '🇲🇺',
    '🇾🇹',
    '🇲🇽',
    '🇫🇲',
    '🇲🇩',
    '🇲🇨',
    '🇲🇳',
    '🇲🇪',
    '🇲🇸',
    '🇲🇦',
    '🇲🇿',
    '🇲🇲',
    '🇳🇦',
    '🇳🇷',
    '🇳🇵',
    '🇳🇱',
    '🇳🇨',
    '🇳🇿',
    '🇳🇮',
    '🇳🇪',
    '🇳🇬',
    '🇳🇺',
    '🇳🇫',
    '🇲🇵',
    '🇰🇵',
    '🇳🇴',
    '🇴🇲',
    '🇵🇰',
    '🇵🇼',
    '🇵🇸',
    '🇵🇦',
    '🇵🇬',
    '🇵🇾',
    '🇵🇪',
    '🇵🇭',
    '🇵🇳',
    '🇵🇱',
    '🇵🇹',
    '🇵🇷',
    '🇶🇦',
    '🇷🇪',
    '🇷🇴',
    '🇷🇺',
    '🇷🇼',
    '🇧🇱',
    '🇸🇭',
    '🇰🇳',
    '🇱🇨',
    '🇵🇲',
    '🇻🇨',
    '🇼🇸',
    '🇸🇲',
    '🇸🇹',
    '🇸🇦',
    '🇸🇳',
    '🇷🇸',
    '🇸🇨',
    '🇸🇱',
    '🇸🇬',
    '🇸🇽',
    '🇸🇰',
    '🇸🇮',
    '🇸🇧',
    '🇸🇴',
    '🇿🇦',
    '🇬🇸',
    '🇰🇷',
    '🇸🇸',
    '🇪🇸',
    '🇱🇰',
    '🇸🇩',
    '🇸🇷',
    '🇸🇿',
    '🇸🇪',
    '🇨🇭',
    '🇸🇾',
    '🇹🇼',
    '🇹🇯',
    '🇹🇿',
    '🇹🇭',
    '🇹🇱',
    '🇹🇬',
    '🇹🇰',
    '🇹🇴',
    '🇹🇹',
    '🇹🇳',
    '🇹🇷',
    '🇹🇲',
    '🇹🇨',
    '🇹🇻',
    '🇺🇬',
    '🇺🇦',
    '🇦🇪',
    '🇬🇧',
    '🇺🇸',
    '🇻🇮',
    '🇺🇾',
    '🇺🇿',
    '🇻🇺',
    '🇻🇦',
    '🇻🇪',
    '🇻🇳',
    '🇼🇫',
    '🇪🇭',
    '🇾🇪',
    '🇿🇲',
    '🇿🇼',
    '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
];

const symbols = [
    '❤️',
    '💛',
    '💚',
    '💙',
    '💜',
    '🖤',
    '💔',
    '❣️',
    '💕',
    '💞',
    '💓',
    '💗',
    '💖',
    '💘',
    '💝',
    '💟',
    '☮️',
    '✝️',
    '☪️',
    '🕉',
    '☸️',
    '✡️',
    '🔯',
    '🕎',
    '☯️',
    '☦️',
    '🛐',
    '⛎',
    '♈️',
    '♉️',
    '♊️',
    '♋️',
    '♌️',
    '♍️',
    '♎️',
    '♏️',
    '♐️',
    '♑️',
    '♒️',
    '♓️',
    '🆔',
    '⚛️',
    '🉑',
    '☢️',
    '☣️',
    '📴',
    '📳',
    '🈶',
    '🈚️',
    '🈸',
    '🈺',
    '🈷️',
    '✴️',
    '🆚',
    '💮',
    '🉐',
    '㊙️',
    '㊗️',
    '🈴',
    '🈵',
    '🈹',
    '🈲',
    '🅰️',
    '🅱️',
    '🆎',
    '🆑',
    '🅾️',
    '🆘',
    '❌',
    '⭕️',
    '🛑',
    '⛔️',
    '📛',
    '🚫',
    '💯',
    '💢',
    '♨️',
    '🚷',
    '🚯',
    '🚳',
    '🚱',
    '🔞',
    '📵',
    '🚭',
    '❗️',
    '❕',
    '❓',
    '❔',
    '‼️',
    '⁉️',
    '🔅',
    '🔆',
    '〽️',
    '⚠️',
    '🚸',
    '🔱',
    '⚜️',
    '🔰',
    '♻️',
    '✅',
    '🈯️',
    '💹',
    '❇️',
    '✳️',
    '❎',
    '🌐',
    '💠',
    'Ⓜ️',
    '🌀',
    '💤',
    '🏧',
    '🚾',
    '♿️',
    '🅿️',
    '🈳',
    '🈂️',
    '🛂',
    '🛃',
    '🛄',
    '🛅',
    '🚹',
    '🚺',
    '🚼',
    '🚻',
    '🚮',
    '🎦',
    '📶',
    '🈁',
    '🔣',
    'ℹ️',
    '🔤',
    '🔡',
    '🔠',
    '🆖',
    '🆗',
    '🆙',
    '🆒',
    '🆕',
    '🆓',
    '0️⃣',
    '1️⃣',
    '2️⃣',
    '3️⃣',
    '4️⃣',
    '5️⃣',
    '6️⃣',
    '7️⃣',
    '8️⃣',
    '9️⃣',
    '🔟',
    '🔢',
    '#️⃣',
    '*️⃣',
    '▶️',
    '⏸',
    '⏯',
    '⏹',
    '⏺',
    '⏭',
    '⏮',
    '⏩',
    '⏪',
    '⏫',
    '⏬',
    '◀️',
    '🔼',
    '🔽',
    '➡️',
    '⬅️',
    '⬆️',
    '⬇️',
    '↗️',
    '↘️',
    '↙️',
    '↖️',
    '↕️',
    '↔️',
    '↪️',
    '↩️',
    '⤴️',
    '⤵️',
    '🔀',
    '🔁',
    '🔂',
    '🔄',
    '🔃',
    '🎵',
    '🎶',
    '➕',
    '➖',
    '➗',
    '✖️',
    '💲',
    '💱',
    '™️',
    '©️',
    '®️',
    '〰️',
    '➰',
    '➿',
    '🔚',
    '🔙',
    '🔛',
    '🔝',
    '🔜',
    '✔️',
    '☑️',
    '🔘',
    '⚪️',
    '⚫️',
    '🔴',
    '🔵',
    '🔺',
    '🔻',
    '🔸',
    '🔹',
    '🔶',
    '🔷',
    '🔳',
    '🔲',
    '▪️',
    '▫️',
    '◾️',
    '◽️',
    '◼️',
    '◻️',
    '⬛️',
    '⬜️',
    '🔈',
    '🔇',
    '🔉',
    '🔊',
    '🔔',
    '🔕',
    '📣',
    '📢',
    '👁‍🗨',
    '💬',
    '💭',
    '🗯',
    '♠️',
    '♣️',
    '♥️',
    '♦️',
    '🃏',
    '🎴',
    '🀄️',
    '🕐',
    '🕑',
    '🕒',
    '🕓',
    '🕔',
    '🕕',
    '🕖',
    '🕗',
    '🕘',
    '🕙',
    '🕚',
    '🕛',
    '🕜',
    '🕝',
    '🕞',
    '🕟',
    '🕠',
    '🕡',
    '🕢',
    '🕣',
    '🕤',
    '🕥',
    '🕦',
    '🕧',
];

const travelAndPlaces = [
    '🚗',
    '🚕',
    '🚙',
    '🚌',
    '🚎',
    '🏎',
    '🚓',
    '🚑',
    '🚒',
    '🚐',
    '🚚',
    '🚛',
    '🚜',
    '🛴',
    '🚲',
    '🛵',
    '🏍',
    '🚨',
    '🚔',
    '🚍',
    '🚘',
    '🚖',
    '🚡',
    '🚠',
    '🚟',
    '🚃',
    '🚋',
    '🚞',
    '🚝',
    '🚄',
    '🚅',
    '🚈',
    '🚂',
    '🚆',
    '🚇',
    '🚊',
    '🚉',
    '🚁',
    '🛩',
    '✈️',
    '🛫',
    '🛬',
    '🚀',
    '🛰',
    '💺',
    '🛶',
    '⛵️',
    '🛥',
    '🚤',
    '🛳',
    '⛴',
    '🚢',
    '⚓️',
    '🚧',
    '⛽️',
    '🚏',
    '🚦',
    '🚥',
    '🗺',
    '🗿',
    '🗽',
    '⛲️',
    '🗼',
    '🏰',
    '🏯',
    '🏟',
    '🎡',
    '🎢',
    '🎠',
    '⛱',
    '🏖',
    '🏝',
    '⛰',
    '🏔',
    '🗻',
    '🌋',
    '🏜',
    '🏕',
    '⛺️',
    '🛤',
    '🛣',
    '🏗',
    '🏭',
    '🏠',
    '🏡',
    '🏘',
    '🏚',
    '🏢',
    '🏬',
    '🏣',
    '🏤',
    '🏥',
    '🏦',
    '🏨',
    '🏪',
    '🏫',
    '🏩',
    '💒',
    '🏛',
    '⛪️',
    '🕌',
    '🕍',
    '🕋',
    '⛩',
    '🗾',
    '🎑',
    '🏞',
    '🌅',
    '🌄',
    '🌠',
    '🎇',
    '🎆',
    '🌇',
    '🌆',
    '🏙',
    '🌃',
    '🌌',
    '🌉',
    '🌁',
    '🦗',
    '🛸',
    '🛷',
    '🥌',
];

const emojis = [...smilyAndPeople, ...animalsAndNature, ...foodAndDrink, ...travelAndPlaces];

const rightAnswerDisplayed = document.getElementById('correctAns');
const wrongAnswerDisplayed = document.getElementById('inCorrectAns');

//document.addEventListener("keypress", (e) => {
//    if (e.key === "Enter") {
//        toggleFullScreen();
//    }
//}, false);

//function toggleFullScreen() {
//  if (!document.fullscreenElement) {
//      document.documentElement.requestFullscreen();
//  }
//}

function populateRandomInputs() {
    document.getElementById('input0').value = Math.round(Math.random() * 20);
    document.getElementById('input1').value = Math.round(Math.random() * 10);
}

function getValues() {
    const x = document.getElementById("operations").selectedIndex;
    return {
        num1: document.getElementById("input0").value,
        num2: document.getElementById("input1").value,
        operation: document.getElementsByTagName("option")[x].value,
        answer: Number(document.getElementById("answer").value),
    }
}

function modernFisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // swap in place
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomEmoji(array) {
    // shuffle array, pull out 3 random elements & join 
    // const shuffled = array.sort(() => 0.5 - Math.random()).slice(0, 3).join('  ');  

    // more optimized version of ☝️
    const shuffledArray = modernFisherYatesShuffle(array);
    return shuffledArray.slice(0, 3).join('   '); 
}

function operationCheck() {
    const { num1, num2, answer, operation } = getValues();

    if (eval(`${num1} ${operation} ${num2}`) === answer) {
        showValue(getRandomEmoji(emojis))
    } else {
        showValue('Try again! 🤪');
    }
}

// capture pressing Enter & submit answer 
document.querySelector("#answer")
    .addEventListener("keyup", (event) => {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.querySelector(".action-btn").click();
        }
    })

// put focus back in answer field after field operations change
document.getElementById("operations").onchange = () => {
    document.getElementById("answer").focus(); 
}

// put focus back in answer field after answer submitted
document.querySelector(".action-btn")
    .addEventListener("click", (event) => {
        event.preventDefault();
        document.getElementById("answer").focus(); 
    })

function reload() {
    location.reload();
    return false;
}

function playSound(val) {
    isCorrectAnswer(val) ?
    document.getElementById("rightAnswer").play() :
        document.getElementById("wrongAnswer").play()
}

function isCorrectAnswer(val) {
    return !val.includes('!');
}

function displayCorrectAnswer(val) {
    // if answered correctly, make element and append to DOM,
     // otherwise if it's showing don't run again with Try Again! button
    if (!document.getElementById('correctAns')) {
        const target = document.querySelector('#result');
        const span = document.createElement('span');
        span.id = 'correctAns';
        span.innerHTML = val;
        playSound(val);
        return target.appendChild(span);
    }
        return;
}

function displayInCorrectAnswer(val) {
    // if answered incorrectly, make element and append to DOM,
     // otherwise if it's showing don't run again with Try Again! button
    if (!document.getElementById('inCorrectAns')) {
        const target = document.querySelector('#result');
        const span = document.createElement('span');
        span.id = 'inCorrectAns';
        span.innerHTML = val;
        playSound(val);
        return target.appendChild(span);
    }
        return;
}

function showValue(val) {
    // if right answer, show result on screen. otherwise show incorrect result
    if (isCorrectAnswer(val)) displayCorrectAnswer(val)
    else if (!isCorrectAnswer(val)) displayInCorrectAnswer(val)

    // remove right ans & replace with wrong ans text if that happened
    if (!isCorrectAnswer(val) && document.getElementById('correctAns')) {
        document.getElementById('correctAns').remove();
        return displayInCorrectAnswer(val);
    }

    // remove wrong ans text & replace with rigth ans if that happened
    if (isCorrectAnswer(val) && document.getElementById('inCorrectAns')) {
        document.getElementById('inCorrectAns').remove();
        return displayCorrectAnswer(val);
    }
}

