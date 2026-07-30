import mongoose, { type Document, type Model } from 'mongoose'
import bcrypt from 'bcryptjs'

export interface IUser extends Document {
  name: string
  email: string
  password: string
  role: 'admin' | 'editor'
  image?: string
  createdAt: Date
  updatedAt: Date
  comparePassword(candidatePassword: string): Promise<boolean>
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, index: true },
    password: { type: String, required: true, select: false },
    role: { type: String, enum: ['admin', 'editor'], default: 'editor' },
    image: { type: String },
  },
  { timestamps: true }
)

// @ts-expect-error - Mongoose 9.x type definitions don't include 'save' in Schema.pre overloads
UserSchema.pre('save', function (this: IUser, next: (err?: Error) => void) {
  if (!this.isModified('password')) return next()
  this.password = bcrypt.hashSync(this.password, 12)
  next()
})

UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password)
}

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema)

export default User