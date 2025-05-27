import * as bcrypt from 'bcrypt';

export async function encodePassword(password: string): Promise<string> {
    const SALT = bcrypt.genSaltSync()
    return await bcrypt.hash(password, SALT);
}
export async function comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
}