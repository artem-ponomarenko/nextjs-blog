export default function handler(req, res) {
  res.setPreviewData({})
  res.end('Preview mode enabled')
}

// export default function handler(req, res) {
//   res.status(200).json({ text: 'Hello' })
// }