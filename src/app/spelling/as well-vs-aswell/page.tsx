import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'As Well vs Aswell - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "as well" and "aswell". Discover definitions, examples, and usage tips to avoid this common spelling mistake.',
  keywords: 'as well vs aswell, spelling, correct spelling, as well, aswell, word comparison',
  openGraph: {
    title: 'As Well vs Aswell - Which is Correct?',
    description: 'Learn the correct spelling between "as well" and "aswell". Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function AsWellVsAswellPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-8">As Well vs Aswell</h1>
      
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
              <h3 className="text-xl font-bold text-green-800">Correct: As Well</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              The correct spelling is <strong>as well</strong> (two words). This is the standard English spelling used in all contexts.
            </p>
          </div>
        </Card>

        <Card className="border-red-200 bg-red-50">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <XCircle className="text-red-600 mr-2" size={24} />
              <h3 className="text-xl font-bold text-red-800">Incorrect: Aswell</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              <strong>Aswell</strong> is a misspelling. The correct spelling is &quot;as well&quot; (two separate words).
            </p>
          </div>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Definition of As Well</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl mb-4">
            <strong>As well</strong> (phrase): Also; in addition; too; besides; similarly.
          </p>
          <p className="text-lg md:text-xl mb-4">
            <strong>As well</strong> is used to indicate that something is also true or applicable, or to add information to what has already been stated.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Examples of Correct Usage</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;I like pizza, and I enjoy pasta <em>as well</em>.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;She can speak French, and she knows Spanish <em>as well</em>.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;The movie was entertaining, and it was educational <em>as well</em>.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Synonyms for As Well</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-lg mb-2">Common alternatives:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Also</li>
                <li>• Too</li>
                <li>• Besides</li>
                <li>• Additionally</li>
                <li>• Furthermore</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">More formal options:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Moreover</li>
                <li>• In addition</li>
                <li>• Likewise</li>
                <li>• Similarly</li>
                <li>• As well as</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Common Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <ul className="text-lg md:text-xl space-y-3">
            <li>• <strong>As well</strong> is always written as two separate words</li>
            <li>• It is commonly used in both formal and informal contexts</li>
            <li>• The phrase typically appears at the end of a sentence or clause</li>
            <li>• It can be used to add information or express similarity</li>
            <li>• Remember: &quot;as well&quot; is two words, not one compound word</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Why do people misspell &quot;as well&quot; as &quot;aswell&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: This misspelling likely occurs because &quot;as well&quot; is often pronounced quickly, making it sound like one word. People then write it as a compound word.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Is &quot;aswell&quot; ever correct?</h4>
            <p className="text-lg md:text-xl">
              A: No, &quot;aswell&quot; is never correct in English. It&apos;s always a misspelling of &quot;as well.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: How can I remember the correct spelling?</h4>
            <p className="text-lg md:text-xl">
              A: Think of it as two separate words: &quot;as&quot; and &quot;well.&quot; You can also remember that it&apos;s similar to other two-word phrases like &quot;as well as&quot; or &quot;as much as.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: What&apos;s the difference between &quot;as well&quot; and &quot;as well as&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: &quot;As well&quot; means &quot;also&quot; or &quot;too,&quot; while &quot;as well as&quot; means &quot;in addition to&quot; or &quot;and also.&quot; &quot;As well&quot; typically ends a sentence, while &quot;as well as&quot; connects two items.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <p className="text-lg md:text-xl">
          The correct spelling is <strong>as well</strong> (two words). <strong>Aswell</strong> is always incorrect. 
          Remember that &quot;as well&quot; is always written as two separate words, not as one compound word. 
          This phrase is commonly used to mean &quot;also&quot; or &quot;in addition&quot; and typically appears at the end of sentences.
        </p>
      </div>
    </div>
  )
} 