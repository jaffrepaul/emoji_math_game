const smileyAndPeople = [
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
    '👶',
    '👦',
    '👧',
    '👨',
    '👩',
    '👱‍♀',
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
    '🌤',
    '⛅️',
    '🌥',
    '🌦',
    '🌈',
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
    '🏺',
    '🔮',
    '📿',
    '💈',
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
    '🖌',
    '🖍',
    '📝',
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
    '🔼',
    '🔽',
    '⬅️',
    '⬆️',
    '⬇️',
    '⤴️',
    '⤵️',
    '🔀',
    '🔁',
    '🔂',
    '🔄',
    '🔃',
    '🎵',
    '🎶',
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
    '🃏',
    '🎴',
    '🀄️',
    '🕑',
    '🕒',
    '🕓',
    '🕔',
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

export const emojis = [...smileyAndPeople, ...animalsAndNature, ...foodAndDrink, ...travelAndPlaces];