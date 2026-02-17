'use server'
import { createClient } from '../../src/utils/supabase/server' // adjusted relative import just in case
import { revalidatePath } from 'next/cache'

export async function postAnnouncement(formData) {
    const supabase = await createClient()

    const title = formData.get('title')
    const content = formData.get('content')

    const { error } = await supabase
        .from('announcements')
        .insert([{ title, content }])

    if (error) {
        return { error: error.message }
    }

    // This clears the cache so the user sees the new post immediately
    revalidatePath('/announcements')
    return { success: true }
}
