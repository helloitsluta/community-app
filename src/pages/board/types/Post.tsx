export default interface Post {
  id: string
  title: string
  content: string
  authorEmail?: string
  createdAt: unknown // Firestore Timestamp는 any로 설정
}
