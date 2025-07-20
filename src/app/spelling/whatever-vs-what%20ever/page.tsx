import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Whatever or What Ever - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;whatever&quot; and &quot;what ever&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WhateverVsWhatEverPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Whatever or What Ever</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;whatever&quot; and &quot;what ever&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: What Ever</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;What ever&quot; is incorrect when used as one word. The correct spelling is &quot;whatever&quot; as a single word.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Whatever</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Whatever&quot; is the correct spelling. It means anything or everything, or is used to express indifference.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Whatever</strong> is the correct spelling. It is a pronoun, determiner, or adverb used to refer to anything or everything, or to express indifference or lack of concern.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>What ever</strong> is incorrect when used as a single concept. The two words should be written together as &quot;whatever&quot;.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Whatever (pronoun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Used to refer to anything or everything, regardless of what it is. Also used to express indifference or lack of concern.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Whatever (determiner)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Used to indicate any or all things, regardless of their nature or type.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Whatever (adverb)</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to express indifference, dismissal, or lack of concern about something.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;You can choose <span className="text-green-600 font-semibold">whatever</span> you want from the menu.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;<span className="text-green-600 font-semibold">Whatever</span> happens, I&apos;ll be there for you.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;I don&apos;t care about the details, <span className="text-green-600 font-semibold">whatever</span>.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;You can choose <span className="text-red-600 font-semibold">what ever</span> you want&quot; (should be &quot;whatever&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For anything:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Anything</li>
                <li>• Everything</li>
                <li>• All</li>
                <li>• Any</li>
                <li>• Whichever</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For indifference:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Anyway</li>
                <li>• Anyhow</li>
                <li>• Regardless</li>
                <li>• Nevertheless</li>
                <li>• In any case</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Whatever&quot; is written as one word, not two separate words</li>
          <li>• The word is a combination of &quot;what&quot; and &quot;ever&quot;</li>
          <li>• It can be used as a pronoun, determiner, or adverb</li>
          <li>• Often used to express indifference or dismissal</li>
          <li>• Similar to &quot;whenever&quot;, &quot;wherever&quot;, and &quot;however&quot;</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;what ever&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;what ever&quot; is never correct when used as a single concept. The correct spelling is always &quot;whatever&quot; as one word.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">When can &quot;what&quot; and &quot;ever&quot; be used separately?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;What&quot; and &quot;ever&quot; can be used separately in questions like &quot;What ever did you mean by that?&quot; but this is different from the pronoun &quot;whatever&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;whatever&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;what-EV-er&quot; with the stress on the second syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;whatever&quot; and &quot;anything&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Whatever&quot; is more informal and can express indifference, while &quot;anything&quot; is more neutral and formal.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;whatever&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, many people incorrectly write it as two separate words &quot;what ever&quot;. This is a very common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Whatever</strong> is the correct spelling. It is a pronoun, determiner, or adverb used to refer to anything or everything, or to express indifference.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>What ever</strong> is always incorrect when used as a single concept. Remember to write it as one word: &quot;whatever&quot;.
        </p>
      </div>
    </div>
  )
} 