const fs = require('fs')
const path = require('path')

const sqlite = require('./sqlite')
const format = require('./format')

async function main () {
  await sqlite.init()

  const [pcam, pcamC] = await format.getAddressPCA(true)
  jsonOut('pcam', pcam)

  console.log('[100%] 数据更新完成！')
}

function jsonOut (name, data) {
  fs.writeFileSync(
    path.resolve(__dirname, `../dist/${name}.json`),
    JSON.stringify(data))
}

main().then(() => process.exit(0))
