let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Tri [089677134384]
╰─

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/BochilGaming
│ • Gopay [085713964963]
╰─
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
