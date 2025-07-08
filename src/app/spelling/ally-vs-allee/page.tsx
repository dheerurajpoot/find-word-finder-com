import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Ally or Allee - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;ally&quot; and &quot;allee&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AllyVsAlleePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Ally or Allee</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;ally&quot; and &quot;allee&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Allee</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Allee&quot; is a common misspelling. The correct spelling is &quot;ally&quot; with a &apos;y&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Ally</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Ally&quot; is the correct spelling. It means a person, group, or nation that is associated with another for a common cause or purpose.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Ally (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person, group, or nation that is joined with another for a common purpose; a supporter or friend.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The two countries became <strong>allies</strong> during the war.</li>
                  <li>• She is an <strong>ally</strong> of the environmental movement.</li>
                  <li>• He found an <strong>ally</strong> in his coworker.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Allee (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Allee&quot; is not a standard English word and is considered a misspelling of &quot;ally&quot; in this context.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Allee&quot; is not used in standard English for &quot;ally&quot;.</li>
                  <li>• Always use <strong>ally</strong> when referring to a supporter or friend.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Ally:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Partner</li>
                <li>• Supporter</li>
                <li>• Friend</li>
                <li>• Associate</li>
                <li>• Collaborator</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Allee:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word in this context)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Ally</strong> is spelled with a &apos;y&apos;, not &quot;ee&quot;.</li>
            <li>• Used to describe a supporter, friend, or partner in a cause.</li>
            <li>• The plural is &quot;allies&quot;.</li>
            <li>• The verb form is also &quot;ally&quot; (to join together for a common purpose).</li>
            <li>• &quot;Allee&quot; is not correct in this context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;allee&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;allee&quot; is never correct as a spelling for &quot;ally&quot;. Always use &quot;ally&quot; for a supporter or friend.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;ally&quot; ends with a &apos;y&apos;, not &quot;ee&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;ally&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;to ally&quot; means to join together for a common purpose.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;ally&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: close ally, military ally, political ally, trusted ally.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;allee&quot; happens because the &apos;y&apos; is sometimes replaced with &quot;ee&quot; due to phonetic similarity.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Ally</strong> is the correct spelling with a &apos;y&apos;. It means a supporter, friend, or partner. The misspelling &quot;allee&quot; is never correct. Use &quot;ally&quot; in social, political, and personal contexts.</p>
      </div>
    </div>
  )
} 