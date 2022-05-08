export interface LanguageToolApi {
	software: Software;
	warnings: Warnings;
	language: Language;
	matches?: MatchesEntity[] | null;
}
export interface Software {
	name: string;
	version: string;
	buildDate: string;
	apiVersion: number;
	premium: boolean;
	premiumHint: string;
	status: string;
}
export interface Warnings {
	incompleteResults: boolean;
}
export interface Language {
	name: string;
	code: string;
	detectedLanguage: DetectedLanguage;
}
export interface DetectedLanguage {
	name: string;
	code: string;
	confidence: number;
}
export interface MatchesEntity {
	message: string;
	shortMessage: string;
	replacements?: ReplacementsEntity[] | null;
	offset: number;
	length: number;
	context: Context;
	sentence: string;
	type: Type;
	rule: Rule;
	ignoreForIncompleteSentence: boolean;
	contextForSureMatch: number;
}
export interface ReplacementsEntity {
	value: string;
}
export interface Context {
	text: string;
	offset: number;
	length: number;
}
export interface Type {
	typeName: string;
}
export interface Rule {
	id: string;
	description: string;
	issueType: string;
	category: Category;
}
export interface Category {
	id: string;
	name: string;
}

// Interface for Plugin Settings
export interface LanguageToolPluginSettings {
	shouldAutoCheck: boolean;

	serverUrl: string;
	urlMode: 'standard' | 'premium' | 'custom';
	glassBg: boolean;
	apikey?: string;
	username?: string;
	staticLanguage?: string;

	pickyMode: boolean;

	ruleOtherCategories?: string;
	ruleOtherRules?: string;
	ruleOtherDisabledRules?: string;
	prefLangEnabled?: boolean;
	prefLangEnglish?: PrefEnglish;
	prefLangGerman?: PrefGerman;
	prefLangSpanish?: null;
	prefLangPortuguese?: null;
	prefLangCatalan?: null;
}

// Types for the languages
export type PrefEnglish = 'en-GB' | 'en-US' | 'en-AU' | 'en-ZA' | 'en-NZ';
export type PrefGerman = 'de-DE' | 'de-CH' | 'de-AT';
export type PrefSpanish = 'en-GB' | 'en-US' | 'en-AU' | 'en-ZA' | 'en-NZ';
export type PrefPortuguese = 'en-GB' | 'en-US' | 'en-AU' | 'en-ZA' | 'en-NZ';
export type PrefCatalan = 'en-GB' | 'en-US' | 'en-AU' | 'en-ZA' | 'en-NZ';
