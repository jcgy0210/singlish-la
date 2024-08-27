import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SinglishLA - Home',
};

export default async function Page() {
    return(
        <p>This is Home Page.</p>
    )
}