import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Exception or Acception - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;exception&quot; and &quot;acception&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ExceptionVsAcceptionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Exception or Acception</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;exception&quot; and &quot;acception&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Acception</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Acception&quot; is a misspelling. The correct spelling is &quot;exception&quot; with &quot;ex&quot; at the beginning.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Exception</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Exception&quot; is the correct spelling. It means a case that does not follow the general rule or pattern.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Exception (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A case that does not follow the general rule or pattern; something that is excluded from a general statement.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• There was one <strong>exception</strong> to the rule.</li>
                  <li>• Everyone must attend, with no <strong>exceptions</strong>.</li>
                  <li>• This case is an <strong>exception</strong> to the norm.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Acception (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Acception&quot; is a misspelling of &quot;exception&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Acception&quot; is not used in standard English.</li>
                  <li>• Always use <strong>exception</strong> when referring to special cases.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Exception:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Anomaly</li>
                <li>• Deviation</li>
                <li>• Irregularity</li>
                <li>• Special case</li>
                <li>• Exclusion</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Acception:</h4>
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
          <li>• <strong>Exception</strong> is spelled with &quot;ex&quot; at the beginning, not &quot;ac&quot;.</li>
          <li>• The word comes from Latin &quot;exceptio&quot; meaning exclusion.</li>
          <li>• Used in legal, academic, and general contexts.</li>
          <li>• Often used in programming and technical writing.</li>
          <li>• &quot;Acception&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;acception&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;acception&quot; is never correct. The proper spelling is always &quot;exception.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ex&quot; + &quot;ception&quot; - like &quot;except&quot; with &quot;ception&quot; ending.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between exception and exclusion?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: An exception is a case that doesn&apos;t follow a rule, while exclusion is the act of leaving something out.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can exception be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;exception&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;acception&quot; likely occurs because of confusion about the prefix or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;exception&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: no exception, exception to the rule, make an exception, and with the exception of.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Exception</strong> is the correct spelling with &quot;ex&quot; at the beginning. It means a case that does not follow the general rule. The misspelling &quot;acception&quot; is never correct.</p>
      </div>
    </div>
  )
} 