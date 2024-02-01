// route handler enabling draft mode
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
 
export async function GET(request) {
  const { pathname } = new URL(request.url)
  const slug = pathname.split('/')[3];
  draftMode().disable();
  console.log('Preview mode is disabled');
  redirect('/' + slug);
}
