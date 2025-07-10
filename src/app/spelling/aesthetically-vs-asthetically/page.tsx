import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Aesthetically vs Asthetically - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "aesthetically" and "asthetically". Discover definitions, examples, and usage tips to avoid this common spelling mistake.',
  keywords: 'aesthetically vs asthetically, spelling, correct spelling, aesthetically, asthetically, word comparison',
  openGraph: {
    title: 'Aesthetically vs Asthetically - Which is Correct?',
    description: 'Learn the correct spelling between "aesthetically" and "asthetically". Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function AestheticallyVsAstheticallyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-8">Aesthetically or Asthetically</h1>
      
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-center">
          Learn the difference between &quot;Aesthetically&quot; and &quot;Asthetically&quot;. These are commonly confused spellings and how to use them correctly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-green-200 bg-green-50">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="text-green-600 mr-2" size={24} />
              <h3 className="text-xl font-bold text-green-800">Correct: Aesthetically</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              The correct spelling is <strong>aesthetically</strong>. This is the standard English spelling used in all contexts.
            </p>
          </div>
        </Card>

        <Card className="border-red-200 bg-red-50">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <XCircle className="text-red-600 mr-2" size={24} />
              <h3 className="text-xl font-bold text-red-800">Incorrect: Asthetically</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              <strong>Asthetically</strong> is a misspelling. The correct spelling is &quot;aesthetically&quot; with an &quot;e&quot; after &quot;a&quot;.
            </p>
          </div>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Definition of Aesthetically</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl mb-4">
            <strong>Aesthetically</strong> (adverb): In a way that relates to beauty or the appreciation of beauty; pleasing to the senses, especially the sense of sight.
          </p>
          <p className="text-lg md:text-xl mb-4">
            <strong>Aesthetically</strong> is the adverbial form of &quot;aesthetic,&quot; which relates to beauty, art, and taste.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Examples of Correct Usage</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;The garden was designed <em>aesthetically</em> to please the eye.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;The building is <em>aesthetically</em> pleasing with its modern architecture.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;She arranged the flowers <em>aesthetically</em> in the vase.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Synonyms for Aesthetically</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-lg mb-2">Related to beauty:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Beautifully</li>
                <li>• Artistically</li>
                <li>• Visually</li>
                <li>• Harmoniously</li>
                <li>• Elegantly</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Related to design:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Tastefully</li>
                <li>• Stylishly</li>
                <li>• Gracefully</li>
                <li>• Pleasingly</li>
                <li>• Attractively</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Common Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <ul className="text-lg md:text-xl space-y-3">
            <li>• <strong>Aesthetically</strong> is commonly used in formal and academic contexts</li>
            <li>• The word is often used in discussions about art, design, architecture, and beauty</li>
            <li>• Common phrases include &quot;aesthetically pleasing,&quot; &quot;aesthetically designed,&quot; and &quot;aesthetically appealing&quot;</li>
            <li>• The root word is &quot;aesthetic&quot; (noun/adjective), which comes from the Greek word for perception</li>
            <li>• Remember: there&apos;s an &quot;e&quot; after the &quot;a&quot; in &quot;aesthetically&quot; - think of &quot;aesthetic&quot; + &quot;ally&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Why do people misspell &quot;aesthetically&quot; as &quot;asthetically&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: This misspelling likely occurs because the &quot;e&quot; sound after &quot;a&quot; might be silent or unclear in pronunciation, leading people to omit it in spelling.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Is &quot;asthetically&quot; ever correct?</h4>
            <p className="text-lg md:text-xl">
              A: No, &quot;asthetically&quot; is never correct in English. It&apos;s always a misspelling of &quot;aesthetically.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: How can I remember the correct spelling?</h4>
            <p className="text-lg md:text-xl">
              A: Think of the root word &quot;aesthetic&quot; - it has an &quot;e&quot; after the &quot;a&quot;. When you add &quot;-ally&quot; to make it an adverb, you keep that &quot;e&quot;. You can also remember that &quot;aesthetic&quot; comes from the Greek word for perception.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: What&apos;s the difference between &quot;aesthetic&quot; and &quot;aesthetically&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: &quot;Aesthetic&quot; is an adjective or noun meaning relating to beauty or the appreciation of beauty. &quot;Aesthetically&quot; is the adverb form, meaning in an aesthetic manner or way.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <p className="text-lg md:text-xl">
          The correct spelling is <strong>aesthetically</strong>. <strong>Asthetically</strong> is always incorrect. 
          Remember that &quot;aesthetically&quot; has an &quot;e&quot; after the &quot;a&quot; and comes from the word &quot;aesthetic.&quot; 
          This word is commonly used in discussions about beauty, art, design, and visual appeal.
        </p>
      </div>
    </div>
  )
} 