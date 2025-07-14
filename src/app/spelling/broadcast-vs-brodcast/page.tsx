import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Broadcast or Brodcast - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;broadcast&quot; and &quot;brodcast&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'broadcast, brodcast, spelling, correct spelling, word comparison, English spelling, media, transmission',
  openGraph: {
    title: 'Broadcast or Brodcast - Which is Correct?',
    description: 'Learn the correct spelling between &quot;broadcast&quot; and &quot;brodcast&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BroadcastVsBrodcastPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Broadcast or Brodcast</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of &quot;Broadcast&quot; and &quot;Brodcast&quot;. This is a word meaning to transmit or send out information via radio, television, or other media.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Brodcast
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Brodcast&quot; is a misspelling of the word &quot;broadcast.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• The news was brodcast live</li>
              <li>• They brodcast the game yesterday</li>
              <li>• The radio brodcast the weather</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Broadcast
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Broadcast&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• The news was broadcast live</li>
              <li>• They broadcast the game yesterday</li>
              <li>• The radio broadcast the weather</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Broadcast</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Broadcast</strong> (verb): To transmit or send out information, programs, or signals via radio, television, or other electronic media.
          </p>
          <p>
            <strong>Broadcast</strong> (noun): A radio or television program or transmission.
          </p>
          <p>
            <strong>Broadcast</strong> (adjective): Relating to or involving the transmission of information to a wide audience.
          </p>
          <p>
            The word comes from the combination of &quot;broad&quot; (wide) and &quot;cast&quot; (to throw or send), literally meaning to send widely.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Broadcast</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Transmit</li>
              <li>• Air</li>
              <li>• Show</li>
              <li>• Telecast</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Relay</li>
              <li>• Send</li>
              <li>• Disseminate</li>
              <li>• Distribute</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Broadcast&quot; is always spelled with &quot;broad&quot; at the beginning</li>
          <li>• The word comes from &quot;broad&quot; + &quot;cast&quot; (to send widely)</li>
          <li>• The pronunciation is /ˈbrɔːdkɑːst/ (BRAWDS-kast)</li>
          <li>• &quot;Brodcast&quot; is a common misspelling but is never correct</li>
          <li>• The word can be used as a verb, noun, or adjective</li>
          <li>• It&apos;s commonly used in media and communication contexts</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;brodcast&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people hear the pronunciation and assume it starts with &quot;brod&quot; instead of &quot;broad.&quot; The spelling &quot;broad&quot; is not intuitive from the pronunciation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;brodcast&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;brodcast&quot; is always incorrect. Always use &quot;broadcast&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;broadcast&quot; and &quot;telecast&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Broadcast&quot; is a broader term that includes radio, television, and other media, while &quot;telecast&quot; specifically refers to television broadcasting.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;broad&quot; (wide) + &quot;cast&quot; (to send). The word literally means to send widely, so it starts with &quot;broad&quot; not &quot;brod.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Broadcast</strong> is the correct spelling of this word. The incorrect spelling &quot;brodcast&quot; should never be used.
          </p>
          <p>
            Remember: Broadcast = Broad + cast. The word literally means to send widely, so it starts with &quot;broad&quot; not &quot;brod.&quot;
          </p>
        </div>
      </div>
    </div>
  )
} 