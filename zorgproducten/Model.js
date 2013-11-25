
guidedModel =// @startlock
{
	Jaarrekening :
	{
		totaal_bestemmingsreserves :
		{
			onGet:function()
			{// @endlock
				return this.bestemmingsreserve_aanvaardbare_kosten + this.bestemmingsreserve_vastgoed + this.bestemmingsreserve_egalisatie_instandhouding + this.bestemmingsreserve_overig
			}// @startlock
		},
		eindresultaat :
		{
			onGet:function()
			{// @endlock
				return this.resultaat_gewone_bedrijfsvoering + this.buitengewoon_resultaat
			}// @startlock
		},
		buitengewoon_resultaat :
		{
			onGet:function()
			{// @endlock
				return this.buitengewone_baten - this.buitengewone_lasten
			}// @startlock
		},
		resultaat_gewone_bedrijfsuitvoering :
		{
			onGet:function()
			{// @endlock
				return this.bedrijfsresultaat + this.financiele_baten_en_lasten
			}// @startlock
		},
		bedrijfsresultaat :
		{
			onGet:function()
			{// @endlock
				return this.totaal_bedrijfsopbrengsten - this.totaal_bedrijfslasten
			}// @startlock
		},
		totaal_bedrijfslasten :
		{
			onGet:function()
			{// @endlock
				return this.personeelskosten + this.honorarium_vrij_gevestigde_specialisten + this.afschrijvingen + this.bijzondere_waardeverminderingen + this.overige_bedrijfslasten
			}// @startlock
		},
		werkkapitaal :
		{
			onGet:function()
			{// @endlock
				return this.totaal_vlottende_activa - this.totaal_kortlopende_schulden
			}// @startlock
		},
		current_ratio :
		{
			onGet:function()
			{// @endlock
				return (this.totaal_vlottende_activa / ( this.totaal_kortlopende_schulden )).toFixed(3) * 100
			}// @startlock
		},
		loan_to_value :
		{
			onGet:function()
			{// @endlock
				return (this.langlopende_schulden / ( this.totaal_vaste_activa )).toFixed(3) * 100
			}// @startlock
		},
		weerstandsvermogen :
		{
			onGet:function()
			{// @endlock
				return (this.totaal_eigen_vermogen / ( this.totaal_bedrijfsopbrengsten )).toFixed(3) * 100
			}// @startlock
		},
		solvabiliteit2 :
		{
			onGet:function()
			{// @endlock
				return (this.totaal_eigen_vermogen / ( this.totaal_passiva )).toFixed(3) * 100
			}// @startlock
		},
		solvabiliteit :
		{
			onGet:function()
			{// @endlock
				return (this.totaal_eigen_vermogen / ( this.voorzieningen + this.langlopende_schulden + this.totaal_kortlopende_schulden )).toFixed(3) * 100	
			}// @startlock
		},
		totaal_eigen_vermogen :
		{
			onGet:function()
			{// @endlock
				return this.kapitaal + this.collectief_gefinancieerd_gebonden_vermogen + this.vrij_vermogen
			}// @startlock
		},
		totaal_kortlopende_schulden :
		{
			onGet:function()
			{// @endlock
				return this.schulden_financieringsoverschot + this.schulden_honorariumplafond + this.overige_kortlopende_schulden
			}// @startlock
		},
		totaal_bedrijfsopbrengsten :
		{
			onGet:function()
			{// @endlock
				return this.wettelijk_budget + this.niet_gebudgetteerde_prestaties + this.omzet_a_segment_dbc + this.omzet_b_segment_dbc + this.opbrengst_transitie + this.honorarium_vrij_gevestigd + this.opbrengsten_deelname + this.subsidies + this.overige_bedrijfsopbrengsten 
			}// @startlock
		},
		totaal_vaste_activa :
		{
			onGet:function()
			{// @endlock
				return this.immateriele_vaste_activa + this.materiele_vaste_activa + this.financiele_vaste_activa
			}// @startlock
		},
		totaal_activa :
		{
			onGet:function()
			{// @endlock
				return this.totaal_vaste_activa + this.totaal_vlottende_activa
			}// @startlock
		},
		totaal_passiva :
		{
			onGet:function()
			{// @endlock
				return this.totaal_eigen_vermogen + this.voorzieningen + this.langlopende_schulden + this.totaal_kortlopende_schulden
			}// @startlock
		},
		totaal_vlottende_activa :
		{
			onGet:function()
			{// @endlock
				return this.voorraden + this.vorderingen_financieringstekort + this.onderhanden_werk + this.vorderingen_transitie + this.overige_vorderingen + this.liquide_middelen + this.overige_vlottende_activa;
			}// @startlock
		}
	},
	Zorgproduct :
	{
		NZacode :
		{
			onSet:function(value)
			{// @endlock
				return this.NZaletter +"  "+ this.NZacijfer;
			},// @startlock
			onGet:function()
			{// @endlock
				return this.NZaletter +"  "+ this.NZacijfer;
			}// @startlock
		}
	}
};// @endlock

include("./Model/Organisatie/Organisatie-events.js");
include("./Model/OrganisatieUser/OrganisatieUser-events.js");
include("./Model/Organisatie/Organisatie-methods.js");
include("./Model/Organisatieeenheid/Organisatieeenheid-events.js");
include("./Model/Jaarrekening/Jaarrekening-events.js");