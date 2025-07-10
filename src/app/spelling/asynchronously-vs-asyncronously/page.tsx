import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Asynchronously vs Asyncronously - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "asynchronously" and "asyncronously". Discover definitions, examples, and usage tips to avoid this common spelling mistake.',
  keywords: 'asynchronously vs asyncronously, spelling, correct spelling, asynchronously, asyncronously, word comparison',
  openGraph: {
    title: 'Asynchronously vs Asyncronously - Which is Correct?',
    description: 'Learn the correct spelling between "asynchronously" and "asyncronously". Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function AsynchronouslyVsAsyncronouslyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-8">Asynchronously vs Asyncronously</h1>
      
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-center">
          Learn the difference between these commonly confused spellings and when to use each one.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-green-200 bg-green-50">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="text-green-600 mr-2" size={24} />
              <h3 className="text-xl font-bold text-green-800">Correct: Asynchronously</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              The correct spelling is <strong>asynchronously</strong>. This is the standard English spelling used in all contexts.
            </p>
          </div>
        </Card>

        <Card className="border-red-200 bg-red-50">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <XCircle className="text-red-600 mr-2" size={24} />
              <h3 className="text-xl font-bold text-red-800">Incorrect: Asyncronously</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              <strong>Asyncronously</strong> is a misspelling. The correct spelling is &quot;asynchronously&quot; with an &quot;h&quot; after &quot;c&quot;.
            </p>
          </div>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Definition of Asynchronously</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl mb-4">
            <strong>Asynchronously</strong> (adverb): In a way that does not occur at the same time; not synchronized; happening independently of other events or processes.
          </p>
          <p className="text-lg md:text-xl mb-4">
            <strong>Asynchronously</strong> is commonly used in computing and technology to describe processes that run independently without waiting for each other to complete.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Examples of Correct Usage</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;The data is processed <em>asynchronously</em> to improve performance.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;The functions run <em>asynchronously</em> without blocking each other.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;The messages are sent <em>asynchronously</em> to avoid delays.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Synonyms for Asynchronously</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-lg mb-2">Technical terms:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Non-synchronously</li>
                <li>• Independently</li>
                <li>• Concurrently</li>
                <li>• In parallel</li>
                <li>• Non-blocking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">General terms:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Separately</li>
                <li>• Independently</li>
                <li>• At different times</li>
                <li>• Out of sync</li>
                <li>• Uncoordinated</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Common Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <ul className="text-lg md:text-xl space-y-3">
            <li>• <strong>Asynchronously</strong> is commonly used in computing and technology contexts</li>
            <li>• The word comes from &quot;asynchronous&quot; (adjective) meaning not occurring at the same time</li>
            <li>• Common phrases include &quot;asynchronously processed,&quot; &quot;asynchronously executed,&quot; and &quot;asynchronously loaded&quot;</li>
            <li>• The root word is &quot;synchronous&quot; meaning occurring at the same time</li>
            <li>• Remember: there&apos;s an &quot;h&quot; after the &quot;c&quot; in &quot;asynchronously&quot; - think of &quot;asynchronous&quot; + &quot;ly&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Why do people misspell &quot;asynchronously&quot; as &quot;asyncronously&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: This misspelling likely occurs because the &quot;h&quot; sound in &quot;chron&quot; might be unclear in pronunciation, leading people to omit it in spelling.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Is &quot;asyncronously&quot; ever correct?</h4>
            <p className="text-lg md:text-xl">
              A: No, &quot;asyncronously&quot; is never correct in English. It&apos;s always a misspelling of &quot;asynchronously.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: How can I remember the correct spelling?</h4>
            <p className="text-lg md:text-xl">
              A: Think of the root word &quot;synchronous&quot; - it has an &quot;h&quot; in &quot;chron.&quot; When you add &quot;a-&quot; to make it negative and &quot;-ly&quot; to make it an adverb, you keep that &quot;h.&quot; You can also remember that &quot;chron&quot; comes from the Greek word for time.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: What&apos;s the difference between &quot;asynchronously&quot; and &quot;synchronously&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: &quot;Asynchronously&quot; means not occurring at the same time or independently, while &quot;synchronously&quot; means occurring at the same time or in coordination. In computing, asynchronous operations don&apos;t wait for each other, while synchronous operations do.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <p className="text-lg md:text-xl">
          The correct spelling is <strong>asynchronously</strong>. <strong>Asyncronously</strong> is always incorrect. 
          Remember that &quot;asynchronously&quot; has an &quot;h&quot; after the &quot;c&quot; and comes from the word &quot;asynchronous.&quot; 
          This word is commonly used in computing and technology to describe processes that run independently.
        </p>
      </div>
    </div>
  )
} 