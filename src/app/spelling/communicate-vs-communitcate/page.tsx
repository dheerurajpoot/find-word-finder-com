import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Communicate or Communitcate - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;communicate&quot; and &quot;communitcate&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CommunicateVsCommunitcatePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Communicate or Communitcate</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-gray-800 text-center">
          Unsure whether to use &quot;communicate&quot; or &quot;communitcate&quot;? This page explains the correct spelling, meaning, and common mistakes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-red-50 border-l-4 border-red-500">
          <CardContent>
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-2">❌</span>
              <span className="text-2xl font-bold text-red-700">Communitcate</span>
            </div>
            <p className="text-lg md:text-xl text-red-800">Incorrect spelling</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-l-4 border-green-500">
          <CardContent>
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-2">✅</span>
              <span className="text-2xl font-bold text-green-700">Communicate</span>
            </div>
            <p className="text-lg md:text-xl text-green-800">Correct spelling</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definitions</h2>
        <div className="text-lg md:text-xl text-gray-800 mb-2">
          <b>Communicate</b> (verb): To share or exchange information, news, or ideas.
        </div>
        <div className="text-lg md:text-xl text-gray-800">
          <b>Examples:</b>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>He had to communicate to the king a message of great importance.</li>
            <li>He didn&apos;t like her and found her difficult to communicate with.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms</h2>
        <div className="bg-blue-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="text-lg md:text-xl text-blue-800 space-y-1">
            <li>Convey</li>
            <li>Transmit</li>
          </ul>
          <ul className="text-lg md:text-xl text-blue-800 space-y-1">
            <li>Express</li>
            <li>Disclose</li>
          </ul>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Communitcate&quot; is a frequent error due to the extra &quot;t&quot; in the middle. The correct form is &quot;communicate&quot;.</li>
          <li>Pronunciation: kəˈmjuːnɪkeɪt</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow border">
            <b>Is it communitcate or communicate?</b>
            <div>The correct word is <b>communicate</b>.</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border">
            <b>How to pronounce communicate?</b>
            <div>The correct pronunciation is kəˈmjuːnɪkeɪt.</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border">
            <b>What does communicate mean?</b>
            <div>To share or exchange information, news, or ideas.</div>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          The correct spelling is <b>communicate</b>. &quot;Communitcate&quot; is a common misspelling. &quot;Communicate&quot; means to share or exchange information, news, or ideas.
        </p>
      </div>
    </div>
  )
} 