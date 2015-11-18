<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace nselementary;

/**
 * Description of GatiService
 *
 * @author james
 */
class GatiService {
    public $database;
    /**
     *  This method is run when the class first used
     */
    public function __construct() {
        $this->database = new \medoo([
            'database_type' => 'mysql',
            'database_name' => 'gati',
            'server' => 'localhost',
            'username' => 'root',
            'password' => '',
            'charset' => 'utf8'
        ]);
    }
    /**
     * Add a suggestion
     * 
     * @param string $suggestion
     * @return array
     */
    public function addSuggestion($suggestion) {
        $this->database->insert('suggestions', [
            'suggestion' => $suggestion
        ]);
        return $this->getSuggestions();
    }
    /**
     * Get a list of suggestions
     * 
     * @return array
     */
    public function getSuggestions() {
        return [ "suggestions" => $this->database->select("suggestions", [
            "id",
            "suggestion"
        ], [
            "ORDER" => "id DESC",
        ])];
    }
}
