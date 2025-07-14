import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Candidate or Candiate - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;candidate&quot; and &quot;candiate&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CandidateVsCandiatePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Candidate or Candiate</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;candidate&quot; and &quot;candiate&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Candiate</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Candiate&quot; is a misspelling. The correct spelling is &quot;candidate&quot; with a &quot;d&quot; before the &quot;ate&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Candidate</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Candidate&quot; is the correct spelling. It means a person who is running for office or applying for a position.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Candidate (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person who is running for office, applying for a job, or being considered for a position.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The presidential <strong>candidate</strong> gave a speech.</li>
                  <li>• She is a strong <strong>candidate</strong> for the job.</li>
                  <li>• Several <strong>candidates</strong> applied for the position.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Candiate (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Candiate&quot; is a misspelling of &quot;candidate&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Candiate&quot; is not used in standard English.</li>
                  <li>• Always use <strong>candidate</strong> when referring to applicants.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Candidate:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Applicant</li>
                <li>• Contender</li>
                <li>• Nominee</li>
                <li>• Aspirant</li>
                <li>• Hopeful</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Candiate:</h4>
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
            <li>• <strong>Candidate</strong> is spelled with a &quot;d&quot; before &quot;ate&quot;, not just &quot;ate&quot;.</li>
            <li>• The word comes from Latin &quot;candidatus&quot; meaning clothed in white.</li>
            <li>• Can be used in political, professional, or academic contexts.</li>
            <li>• Often refers to someone seeking election or employment.</li>
            <li>• &quot;Candiate&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;candiate&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;candiate&quot; is never correct. The proper spelling is always &quot;candidate.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;can-did-ate&quot; - the word has a &quot;d&quot; before &quot;ate.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between candidate and applicant?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both refer to people seeking positions, but &quot;candidate&quot; is more formal and often used in elections.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;candiate&quot; likely occurs because of confusion about the &quot;d&quot; before &quot;ate.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;candidate&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: presidential candidate, job candidate, and candidate for office.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can candidate be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;candidate&quot; is only used as a noun. The verb form would be &quot;run for office&quot; or &quot;apply.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is candidate only used in politics?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;candidate&quot; is used in many contexts including jobs, awards, and academic positions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word candidate?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from Latin &quot;candidatus&quot; and was first used in English in the 17th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Candidate</strong> is the correct spelling with a &quot;d&quot; before &quot;ate&quot;. It means a person who is running for office or applying for a position. The misspelling &quot;candiate&quot; is never correct. Use &quot;candidate&quot; to describe someone seeking election, employment, or consideration for a role.</p>
      </div>
    </div>
  )
} 