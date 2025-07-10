import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Essay vs Assay - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling and usage between "essay" and "assay". Discover the proper definitions, contexts, and common mistakes to avoid.',
}

export default function EssayVsAssayPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Essay vs Assay</h1>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg inline-block">
          <p className="text-lg md:text-xl font-semibold">Which spelling is correct?</p>
        </div>
      </div>

      {/* Both are Correct Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-blue-200 bg-blue-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-blue-800">Essay</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-blue-600 mb-4">essay</div>
            <p className="text-lg md:text-xl text-blue-700">A short piece of writing on a particular subject.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Assay</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">assay</div>
            <p className="text-lg md:text-xl text-green-700">To test or analyze the quality of something, especially metals.</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Essay (noun)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A short piece of writing on a particular subject, typically expressing the author&apos;s personal views or arguments. 
              It can be academic, creative, or analytical in nature.
            </p>
            <div className="mt-3">
              <h4 className="font-semibold mb-2 text-gray-800">Examples:</h4>
              <ul className="list-disc list-inside space-y-1 text-lg md:text-xl text-gray-700">
                <li>I wrote an <strong>essay</strong> about climate change for my English class.</li>
                <li>Her <strong>essay</strong> on Shakespeare&apos;s sonnets was published in the literary journal.</li>
                <li>The student submitted a 1000-word <strong>essay</strong> on the topic.</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Assay (verb/noun)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              To test or analyze the quality, composition, or purity of something, especially metals or ores. 
              As a noun, it refers to the test or analysis itself.
            </p>
            <div className="mt-3">
              <h4 className="font-semibold mb-2 text-gray-800">Examples:</h4>
              <ul className="list-disc list-inside space-y-1 text-lg md:text-xl text-gray-700">
                <li>The laboratory will <strong>assay</strong> the gold sample for purity.</li>
                <li>The <strong>assay</strong> revealed that the ore contained 15% copper.</li>
                <li>They conducted an <strong>assay</strong> to determine the metal&apos;s composition.</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;essay&quot; and &quot;assay&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Similar pronunciation:</strong> Both words sound very similar when spoken</li>
            <li><strong>Similar spelling:</strong> Both start with &quot;ess&quot; and end with &quot;ay&quot;</li>
            <li><strong>Different contexts:</strong> They are used in completely different fields</li>
            <li><strong>Unfamiliar word:</strong> &quot;Assay&quot; is not commonly used in everyday conversation</li>
            <li><strong>Spell-check confusion:</strong> Auto-correct might suggest the wrong word</li>
          </ul>
        </div>
      </Card>

      {/* Usage Contexts */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Contexts</h2>
        <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Essay - Used in:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Academic writing:</strong> School assignments, research papers, literary analysis</li>
              <li><strong>Creative writing:</strong> Personal essays, opinion pieces, memoirs</li>
              <li><strong>Professional writing:</strong> Business reports, technical documentation</li>
              <li><strong>Journalism:</strong> Editorial pieces, feature articles</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Assay - Used in:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Mining and metallurgy:</strong> Testing ore quality, metal purity</li>
              <li><strong>Chemistry and science:</strong> Laboratory analysis, quality control</li>
              <li><strong>Pharmaceutical industry:</strong> Drug testing and analysis</li>
              <li><strong>Environmental science:</strong> Water and soil testing</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Essay:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>composition</li>
              <li>article</li>
              <li>paper</li>
              <li>dissertation</li>
              <li>thesis</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Assay:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>test</li>
              <li>analysis</li>
              <li>examination</li>
              <li>evaluation</li>
              <li>assessment</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Usage Tips */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Tips</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">When to use &quot;essay&quot;:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>When writing about academic assignments or compositions</li>
              <li>When discussing written works or literary pieces</li>
              <li>In educational or creative writing contexts</li>
              <li>When referring to opinion pieces or articles</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">When to use &quot;assay&quot;:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>When discussing scientific testing or analysis</li>
              <li>In mining, metallurgy, or chemistry contexts</li>
              <li>When referring to quality control or laboratory work</li>
              <li>In pharmaceutical or environmental testing</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Are both spellings correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, both &quot;essay&quot; and &quot;assay&quot; are correct spellings, but they have completely different meanings and uses.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How do I know which one to use?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Use &quot;essay&quot; for writing and composition contexts. Use &quot;assay&quot; for scientific testing and analysis contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the pronunciation difference?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: &quot;Essay&quot; is pronounced /ˈeseɪ/ while &quot;assay&quot; is pronounced /əˈseɪ/. The main difference is the stress pattern.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Can these words be used interchangeably?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, they cannot be used interchangeably. They have completely different meanings and are used in different contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a common confusion due to their similar spelling and pronunciation, especially when people are not familiar with the word &quot;assay.&quot;
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Both <strong>&quot;essay&quot;</strong> and <strong>&quot;assay&quot;</strong> are correct spellings, but they have completely different meanings. 
          <strong>&quot;Essay&quot;</strong> refers to a short piece of writing on a particular subject, while <strong>&quot;assay&quot;</strong> 
          refers to testing or analyzing the quality of something, especially metals. Use &quot;essay&quot; for writing contexts and &quot;assay&quot; 
          for scientific testing contexts.
        </p>
      </div>
    </div>
  )
} 