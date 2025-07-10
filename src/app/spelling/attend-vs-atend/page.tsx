import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Attend vs Atend - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "attend" and "atend". Discover definitions, examples, and usage tips to avoid this common spelling mistake.',
  keywords: 'attend vs atend, spelling, correct spelling, attend, atend, word comparison',
  openGraph: {
    title: 'Attend vs Atend - Which is Correct?',
    description: 'Learn the correct spelling between "attend" and "atend". Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function AttendVsAtendPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-8">Attend vs Atend</h1>
      
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
              <h3 className="text-xl font-bold text-green-800">Correct: Attend</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              The correct spelling is <strong>attend</strong>. This is the standard English spelling used in all contexts.
            </p>
          </div>
        </Card>

        <Card className="border-red-200 bg-red-50">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <XCircle className="text-red-600 mr-2" size={24} />
              <h3 className="text-xl font-bold text-red-800">Incorrect: Atend</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              <strong>Atend</strong> is a misspelling. The correct spelling is &quot;attend&quot; with two &quot;t&quot;s.
            </p>
          </div>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Definition of Attend</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl mb-4">
            <strong>Attend</strong> (verb): To be present at; to go to or be at a place, event, or gathering; to take care of or look after someone or something.
          </p>
          <p className="text-lg md:text-xl mb-4">
            <strong>Attend</strong> can also mean to pay attention to or focus on something.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Examples of Correct Usage</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;I will <em>attend</em> the meeting tomorrow.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;She <em>attended</em> the conference last week.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;The nurse will <em>attend</em> to your needs.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Synonyms for Attend</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-lg mb-2">As &quot;be present&quot;:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Go to</li>
                <li>• Be present at</li>
                <li>• Participate in</li>
                <li>• Show up at</li>
                <li>• Join</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">As &quot;take care of&quot;:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Look after</li>
                <li>• Care for</li>
                <li>• Tend to</li>
                <li>• Serve</li>
                <li>• Help</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Common Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <ul className="text-lg md:text-xl space-y-3">
            <li>• <strong>Attend</strong> is commonly used in both formal and informal contexts</li>
            <li>• The word can be used transitively (attend a meeting) or intransitively (attend to details)</li>
            <li>• Common phrases include &quot;attend school,&quot; &quot;attend a wedding,&quot; and &quot;attend to business&quot;</li>
            <li>• The past tense is &quot;attended&quot; and the present participle is &quot;attending&quot;</li>
            <li>• Remember: there are two &quot;t&quot;s in &quot;attend&quot; - think of &quot;at&quot; + &quot;tend&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Why do people misspell &quot;attend&quot; as &quot;atend&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: This misspelling likely occurs due to phonetic confusion. The double &quot;t&quot; sound might be heard as a single &quot;t&quot;, leading to the incorrect spelling.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Is &quot;atend&quot; ever correct?</h4>
            <p className="text-lg md:text-xl">
              A: No, &quot;atend&quot; is never correct in English. It&apos;s always a misspelling of &quot;attend.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: How can I remember the correct spelling?</h4>
            <p className="text-lg md:text-xl">
              A: Think of the word as &quot;at&quot; + &quot;tend&quot; - you need to &quot;tend&quot; to be &quot;at&quot; a place. You can also remember that &quot;attend&quot; has the same double &quot;t&quot; pattern as &quot;attention.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <p className="text-lg md:text-xl">
          The correct spelling is <strong>attend</strong>. <strong>Atend</strong> is always incorrect. 
          Remember that &quot;attend&quot; has two &quot;t&quot;s and can be broken down as &quot;at&quot; + &quot;tend&quot;. 
          This word is commonly used to mean being present at an event or taking care of someone or something.
        </p>
      </div>
    </div>
  )
} 