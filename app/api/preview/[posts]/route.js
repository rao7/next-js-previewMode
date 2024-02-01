// route handler enabling draft mode
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
 
export async function GET(request) {
  const { pathname } = new URL(request.url)
  const slug = pathname.split('/')[3];
  draftMode().enable();
  console.log('Preview mode is enabled');
  redirect('/' + slug);
}
