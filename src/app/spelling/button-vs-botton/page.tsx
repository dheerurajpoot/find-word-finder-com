import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Button or Botton - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;button&quot; and &quot;botton&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ButtonVsBottonPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Button or Botton</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;button&quot; and &quot;botton&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Botton</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Botton&quot; is a misspelling. The correct spelling is &quot;button&quot; with &quot;u&quot; before the double &quot;t&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Button</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Button&quot; is the correct spelling. It refers to a small fastener or control device that can be pressed.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Button (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A small fastener or control device that can be pressed; to fasten or secure with buttons.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She pressed the <strong>button</strong> to start the machine.</li>
                  <li>• The shirt has shiny <strong>button</strong>s.</li>
                  <li>• Please <strong>button</strong> your coat.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Botton (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Botton&quot; is a misspelling of &quot;button&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Botton&quot; is not used in standard English.</li>
                  <li>• Always use <strong>button</strong> when referring to fasteners or controls.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Button:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Fastener</li>
                <li>• Control</li>
                <li>• Switch</li>
                <li>• Knob</li>
                <li>• Key</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Botton:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Button</strong> is spelled with &quot;u&quot; before the double &quot;t&quot;, not &quot;o&quot;.</li>
            <li>• The word comes from Old French &quot;boton&quot; meaning bud or button.</li>
            <li>• Can be used as both a noun and a verb.</li>
            <li>• Common in clothing, technology, and machinery contexts.</li>
            <li>• &quot;Botton&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;botton&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;botton&quot; is never correct. The proper spelling is always &quot;button.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;but&quot; + &quot;ton&quot; - the word has &quot;u&quot; before the double &quot;t&quot; like &quot;butter&quot; or &quot;mutton.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between button and switch?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A &quot;button&quot; is typically pressed and released, while a &quot;switch&quot; can be toggled between positions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can button be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;button&quot; can be used as a verb meaning to fasten with buttons, as in &quot;Button your shirt.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of pronunciation or confusion with similar words that have &quot;o&quot; instead of &quot;u.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;button&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: push button, button up, button down, hot button, and button your lip.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Button</strong> is the correct spelling with &quot;u&quot; before the double &quot;t&quot;. It refers to a small fastener or control device that can be pressed. The misspelling &quot;botton&quot; is never correct. Use &quot;button&quot; when referring to fasteners, controls, or the action of fastening with buttons.</p>
      </div>
    </div>
  )
} 