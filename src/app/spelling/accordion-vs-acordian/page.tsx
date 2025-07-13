import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Accordion or Acordian - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;accordion&quot; and &quot;acordian&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AccordionVsAcordianPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Accordion or Acordian</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;accordion&quot; and &quot;acordian&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Acordian</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Acordian&quot; is a misspelling. The correct spelling is &quot;accordion&quot; with double &quot;c&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Accordion</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Accordion&quot; is the correct spelling. It refers to a musical instrument with bellows.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Accordion (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A portable musical instrument with bellows, keys, and buttons; also refers to a collapsible structure or interface element.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• He played the <strong>accordion</strong> beautifully.</li>
                  <li>• The <strong>accordion</strong> folder expanded to show more files.</li>
                  <li>• The <strong>accordion</strong> menu collapsed when clicked.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Acordian (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Acordian&quot; is a misspelling of &quot;accordion&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Acordian&quot; is not used in standard English.</li>
                  <li>• Always use <strong>accordion</strong> when referring to the musical instrument.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Accordion:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Squeezebox</li>
                <li>• Concertina</li>
                <li>• Collapsible</li>
                <li>• Expandable</li>
                <li>• Folding</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Acordian:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• <strong>Accordion</strong> has double &quot;c&quot; at the beginning.</li>
          <li>• The word comes from German &quot;Akkordeon&quot; meaning accordion.</li>
          <li>• Used in musical contexts, web design, and everyday conversation.</li>
          <li>• Common in folk music, user interface design, and storage solutions.</li>
          <li>• &quot;Acordian&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;acordian&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;acordian&quot; is never correct. The proper spelling is always &quot;accordion.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;accord&quot; + &quot;ion&quot; - like &quot;accord&quot; with &quot;ion&quot; suffix.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between accordion and concertina?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: An &quot;accordion&quot; has piano keys and buttons, while a &quot;concertina&quot; has only buttons on both sides.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can accordion be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;accordion&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;acordian&quot; likely occurs because people forget the double &quot;c&quot; at the beginning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;accordion&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: accordion player, accordion folder, accordion menu, accordion style, and accordion music.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Accordion</strong> is the correct spelling with double &quot;c&quot; at the beginning. It refers to a musical instrument with bellows or a collapsible structure. The misspelling &quot;acordian&quot; is never correct.</p>
      </div>
    </div>
  )
} 