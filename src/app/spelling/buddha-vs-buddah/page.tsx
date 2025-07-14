import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Buddha or Buddah - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;Buddha&quot; and &quot;Buddah&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BuddhaVsBuddahPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Buddha or Buddah
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Buddha&quot; or &quot;Buddah&quot; these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Buddah</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Buddah&quot; is a misspelling. The correct spelling has two &apos;h&apos;s.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Buddha</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Buddha&quot; is the correct spelling. It&apos;s the title for the founder of Buddhism.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Buddha</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Buddha</strong> (noun): A title given to Siddhartha Gautama, the founder of Buddhism; one who has achieved enlightenment; a person who has attained perfect wisdom and compassion.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The <strong>Buddha</strong> taught the Four Noble Truths.</li>
              <li>• Many people meditate in front of <strong>Buddha</strong> statues.</li>
              <li>• The <strong>Buddha</strong> achieved enlightenment under the Bodhi tree.</li>
              <li>• Buddhist temples often feature images of the <strong>Buddha</strong>.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Buddha</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Enlightened One</li>
                <li>• Awakened One</li>
                <li>• Siddhartha Gautama</li>
                <li>• Shakyamuni</li>
                <li>• Tathagata</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Buddhism</li>
                <li>• Enlightenment</li>
                <li>• Nirvana</li>
                <li>• Dharma</li>
                <li>• Sangha</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="mb-8">
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Buddha</strong> is spelled with two &apos;h&apos;s, not one.</li>
            <li>• The pronunciation is &quot;BOO-duh&quot; (rhyming with &quot;good uh&quot;).</li>
            <li>• It&apos;s a proper noun and should be capitalized.</li>
            <li>• Commonly used in religious and spiritual contexts.</li>
            <li>• The word comes from Sanskrit &quot;buddha&quot; meaning &quot;awakened&quot; or &quot;enlightened.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;Buddah&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;Buddah&quot; is never correct. The proper spelling is always &quot;Buddha&quot; with two &apos;h&apos;s.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;Buddha&quot; as having the same double &apos;h&apos; pattern as other words like &quot;haha&quot; or &quot;uh-huh.&quot; The double &apos;h&apos; is the key to the correct spelling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between Buddha and Buddhism?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Buddha&quot; refers to the person (Siddhartha Gautama) who achieved enlightenment, while &quot;Buddhism&quot; is the religion and philosophy that developed from his teachings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you pronounce Buddha?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The pronunciation is &quot;BOO-duh&quot; (rhyming with &quot;good uh&quot;). The first syllable is stressed, and the second syllable is unstressed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can Buddha be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Buddha&quot; is appropriate in all types of writing, including formal contexts. It&apos;s the standard English spelling for this religious figure and is used in academic, religious, and professional writing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;Buddha&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: Buddha nature, Buddha mind, Buddha statue, Buddha bowl, and Buddha belly. These are all standard English expressions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: People often misspell it as &quot;Buddah&quot; because they might be thinking of the pronunciation or confusing it with other words. The double &apos;h&apos; can be easy to forget.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is Buddha related to any other words?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Buddha&quot; is related to words like &quot;Buddhism&quot; (the religion), &quot;Buddhist&quot; (a follower), &quot;Buddhahood&quot; (the state of being a Buddha), and &quot;Bodhisattva&quot; (one on the path to enlightenment). All share the same root meaning.
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Buddha</strong> is the correct spelling with two &apos;h&apos;s. It&apos;s the title for Siddhartha Gautama, the founder of Buddhism. The misspelling &quot;Buddah&quot; is never correct. This word is commonly used in religious and spiritual contexts and should be capitalized as a proper noun.
        </p>
      </div>
    </div>
  )
} 